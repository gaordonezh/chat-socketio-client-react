import { Widgets } from "@mui/icons-material";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { useWebSocketContext } from "../context/webSocketContext";
import { sharedStyles } from "../utils/consts";
import CardContainer from "./CardContainer";
import ChatInput from "./ChatInput";
import ChatItems from "./ChatItems";

const ChatContainer = () => {
  const { selectedClient, messages, user, bottomRef } = useWebSocketContext();

  return (
    <CardContainer sx={{ bgcolor: "#141517", ...sharedStyles }}>
      <Grid container alignItems="center">
        {selectedClient ? (
          <>
            <Grid item sx={{ width: 90 }}>
              <Avatar src={selectedClient?.logo} sx={{ height: 75, width: 75 }} />
            </Grid>
            <Grid item sx={{ width: "calc((100%) - 100px)" }}>
              <Typography variant="h4" noWrap>
                {selectedClient?.description}
              </Typography>
              <Typography variant="body2" noWrap>
                {`RUC: ${selectedClient?.ruc}`}
              </Typography>
            </Grid>
            <Grid item xs={12} pt={5}>
              <Stack spacing={4} sx={{ overflowY: "auto", height: "calc((100vh) - 375px)", pb: 2 }}>
                {messages.length ? (
                  messages.map((message, index) => {
                    const isMine = message.sender === user?._id;

                    return <ChatItems key={index} message={message} isMine={isMine} />;
                  })
                ) : (
                  <Box textAlign="center">
                    <EmptyMessage title="Aún no tienes mensajes." />
                  </Box>
                )}
                <div ref={bottomRef} />
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ bgcolor: "#292931" }} p={2}>
              <ChatInput />
            </Grid>
          </>
        ) : (
          <Grid item xs={12} container alignItems="center" justifyContent="center" direction="column">
            <EmptyMessage title="Selecciona una sede" />
          </Grid>
        )}
      </Grid>
    </CardContainer>
  );
};

export default ChatContainer;

const EmptyMessage = ({ title }: { title: string }) => {
  return (
    <>
      <Widgets sx={{ fontSize: 100 }} />
      <Typography textAlign="center" variant="h5" component="p">
        {title}
      </Typography>
    </>
  );
};
