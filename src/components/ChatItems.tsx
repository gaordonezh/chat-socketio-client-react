import { MoreVert } from "@mui/icons-material";
import { Avatar, Card, FormHelperText, IconButton, Stack, Typography } from "@mui/material";

interface ChatItemsProps {
  isMine: boolean;
}

interface MessagesContainerProps {
  isMine: boolean;
  index: number;
}

const ChatItems = ({ isMine }: ChatItemsProps) => (
  <Stack alignItems={isMine ? "flex-end" : "flex-start"}>
    <Stack spacing={1} sx={{ width: "calc((100%) - 100px)" }} pr={2}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ pl: isMine ? 1 : 0 }}>
        <Avatar
          src="https://www.numeromag.nl/wp-content/uploads/2020/02/webp.net-resizeimage_46-960x1000.jpg"
          sx={{ height: 25, width: 25 }}
        />
        <Typography>
          Lorem, ipsum dolor
          <FormHelperText component="span" sx={{ ml: 5 }}>
            10:12: AM
          </FormHelperText>
        </Typography>
      </Stack>
      <Stack spacing={0.5}>
        {[1, 2, 3].map((item, index) => (
          <MessageContainer index={index} isMine={isMine} />
        ))}
      </Stack>
    </Stack>
  </Stack>
);

export default ChatItems;

const MessageContainer = ({ isMine, index }: MessagesContainerProps) => (
  <Stack direction="row" spacing={1}>
    {isMine ? (
      <>
        <IconButton>
          <MoreVert />
        </IconButton>
        <Card sx={{ px: 2, py: 1, bgcolor: isMine ? "primary.main" : null }}>
          {index === 2 || index === 3
            ? "Accusantium nobis omnis amet quisquam enim atque expedita. Ipsa hic, sit, fugiat ullam"
            : ""}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          {index === 3 ? "Architecto accusamus cum consequatur" : ""}
        </Card>
      </>
    ) : (
      <>
        <Card sx={{ px: 2, py: 1 }}>
          {index === 2 || index === 3
            ? "Accusantium nobis omnis amet quisquam enim atque expedita. Ipsa hic, sit, fugiat ullam"
            : ""}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          {index === 3 ? "Architecto accusamus cum consequatur" : ""}
        </Card>
        <IconButton>
          <MoreVert />
        </IconButton>
      </>
    )}
  </Stack>
);
