import { BorderColor, Image, InsertEmoticon, NearMe, Widgets } from "@mui/icons-material";
import { Avatar, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { useWebSocketContext } from "../context/webSocketContext";
import { sharedStyles } from "../utils/consts";
import CardContainer from "./CardContainer";
import ChatItems from "./ChatItems";
import Input from "./Input";

const ChatContainer = () => {
  const { selectedClient, messages } = useWebSocketContext();

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
                RUC: {selectedClient?.ruc}
              </Typography>
            </Grid>
            <Grid item xs={12} pt={5}>
              <Stack spacing={4} sx={{ overflowY: "auto", height: "calc((100vh) - 375px)", pb: 2 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
                  <ChatItems key={item} isMine={index === 8} />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ bgcolor: "#292931" }} p={2}>
              <Input
                size="medium"
                fullWidth
                sx={{ borderRadius: 20, overflow: "hidden", border: "1px solid #aaa" }}
                placeholder="Ingresar un mensaje..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BorderColor />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Image />
                      </IconButton>
                      <IconButton>
                        <InsertEmoticon />
                      </IconButton>
                      <IconButton>
                        <NearMe />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12} container alignItems="center" justifyContent="center" direction="column">
            <Widgets sx={{ fontSize: 100 }} />
            <Typography textAlign="center" variant="h5" component="p">
              Selecciona una sede
            </Typography>
          </Grid>
        )}
      </Grid>
    </CardContainer>
  );
};

export default ChatContainer;
