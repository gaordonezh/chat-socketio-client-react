import { Avatar, FormHelperText, Stack, Typography } from "@mui/material";
import { sharedStyles } from "../utils/consts";
import CardContainer from "./CardContainer";

const ProfileContainer = () => {
  return (
    <CardContainer sx={{ bgcolor: "#1e1f24", ...sharedStyles, textAlign: "center" }}>
      <Stack alignItems="center" spacing={2}>
        <Avatar
          src="https://www.numeromag.nl/wp-content/uploads/2020/02/webp.net-resizeimage_46-960x1000.jpg"
          sx={{ height: 100, width: 100 }}
        />
        <Typography>
          lorem ipsum dolor <FormHelperText sx={{ textAlign: "center" }}>que fue manoooo</FormHelperText>
        </Typography>
      </Stack>
    </CardContainer>
  );
};

export default ProfileContainer;
