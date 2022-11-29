import { MoreVert } from "@mui/icons-material";
import { Avatar, Card, FormHelperText, IconButton, Stack, Typography } from "@mui/material";
import { MessageProps } from "../interfaces/types";
import dayjs from "dayjs";

interface ChatItemsProps {
  isMine: boolean;
  message: MessageProps;
}

interface MessagesContainerProps {
  isMine: boolean;
  text: string;
}

const ChatItems = ({ isMine, message }: ChatItemsProps) => (
  <Stack alignItems={isMine ? "flex-end" : "flex-start"}>
    <Stack spacing={1} sx={{ width: "calc((100%) - 100px)" }} pr={2}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ pl: isMine ? 1 : 0 }}>
        <Avatar
          src="https://www.numeromag.nl/wp-content/uploads/2020/02/webp.net-resizeimage_46-960x1000.jpg"
          sx={{ height: 25, width: 25 }}
        />
        <Typography>
          {message.sender}
          <FormHelperText component="span" sx={{ ml: 5 }}>
            {dayjs(message.datetime).format("hh:mm a")}
          </FormHelperText>
        </Typography>
      </Stack>
      <Stack spacing={0.5}>
        {[message.content].map((text, index) => (
          <MessageContainer text={text} key={index} isMine={isMine} />
        ))}
      </Stack>
    </Stack>
  </Stack>
);

export default ChatItems;

const MessageContainer = ({ isMine, text }: MessagesContainerProps) => (
  <Stack direction="row" spacing={1}>
    {isMine ? (
      <>
        <IconButton>
          <MoreVert />
        </IconButton>
        <Card sx={{ px: 2, py: 1, bgcolor: isMine ? "primary.main" : null }}>{text}</Card>
      </>
    ) : (
      <>
        <Card sx={{ px: 2, py: 1 }}>{text}</Card>
        <IconButton>
          <MoreVert />
        </IconButton>
      </>
    )}
  </Stack>
);
