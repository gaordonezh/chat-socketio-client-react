import { FiberManualRecord } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Chip,
  FormHelperText,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useWebSocketContext } from "../context/webSocketContext";
import { ContactProps } from "../interfaces/types";

interface ContactItemProps {
  client: ContactProps;
}

const ContactItem = ({ client }: ContactItemProps) => {
  const { selectedClient, setSelectedClient } = useWebSocketContext();

  return (
    <ListItemButton selected={client._id === selectedClient?._id} onClick={() => setSelectedClient({ ...client })}>
      <ListItemAvatar>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<FiberManualRecord color="success" fontSize="small" />}
        >
          <Avatar src={client.logo} alt={client.description} />
        </Badge>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="body2" noWrap color="inherit" sx={{ maxWidth: "calc((100%) - 55px)" }}>
            {client.description}
          </Typography>
        }
        secondary={
          <Typography variant="caption" noWrap sx={{ maxWidth: "calc((100%) - 55px)", color: "#aaa" }}>
            RUC: {client.ruc}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Stack direction="column" spacing={0} alignItems="end">
          <FormHelperText>14:00 PM</FormHelperText>
          <Chip label={2} size="small" color="primary" />
        </Stack>
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};

export default ContactItem;
