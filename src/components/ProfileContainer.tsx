import { Close } from "@mui/icons-material";
import { Avatar, FormHelperText, IconButton, Stack, Typography } from "@mui/material";
import { useWebSocketContext } from "../context/webSocketContext";
import { sharedStyles } from "../utils/consts";
import CardContainer from "./CardContainer";

const ProfileContainer = () => {
  const { selectedClient, setOpenDetails } = useWebSocketContext();

  return (
    <CardContainer sx={{ bgcolor: "#1e1f24", ...sharedStyles, textAlign: "center", position: "relative" }}>
      <IconButton
        color="inherit"
        size="small"
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => setOpenDetails(false)}
      >
        <Close fontSize="large" />
      </IconButton>
      <Stack alignItems="center" spacing={2}>
        <Avatar src={selectedClient?.logo} sx={{ height: 100, width: 100 }} alt={selectedClient?.description} />
        <Typography>{selectedClient?.description}</Typography>
        <FormHelperText sx={{ textAlign: "center" }}>
          {`RUC: ${selectedClient?.ruc}`}
          <br />
          {`DIRECCIÓN: ${selectedClient?.address}`}
          <br />
          {`TEL/CEL: ${selectedClient?.phone}`}
          <br />
          {`RUBRO: ${selectedClient?.rubro}`}
        </FormHelperText>
      </Stack>
    </CardContainer>
  );
};

export default ProfileContainer;
