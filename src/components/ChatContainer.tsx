import { BorderColor, Image, InsertEmoticon, NearMe } from "@mui/icons-material";
import { Avatar, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { sharedStyles } from "../utils/consts";
import CardContainer from "./CardContainer";
import ChatItems from "./ChatItems";
import Input from "./Input";

const ChatContainer = () => {
  return (
    <CardContainer sx={{ bgcolor: "#141517", ...sharedStyles }}>
      <Grid container alignItems="center">
        <Grid item sx={{ width: 90 }}>
          <Avatar
            src="https://www.numeromag.nl/wp-content/uploads/2020/02/webp.net-resizeimage_46-960x1000.jpg"
            sx={{ height: 75, width: 75 }}
          />
        </Grid>
        <Grid item sx={{ width: "calc((100%) - 100px)" }}>
          <Typography variant="h4" noWrap>
            Design team
          </Typography>
          <Typography variant="body2" noWrap>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, impedit!
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
      </Grid>
    </CardContainer>
  );
};

export default ChatContainer;
