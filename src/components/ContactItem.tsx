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

interface ContactItemProps {
  index: number;
}

const ContactItem = ({ index }: ContactItemProps) => (
  <ListItemButton selected={index === 10}>
    <ListItemAvatar>
      <Badge
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={index === 0 ? <FiberManualRecord color="success" fontSize="small" /> : undefined}
      >
        <Avatar src="https://www.numeromag.nl/wp-content/uploads/2020/02/webp.net-resizeimage_46-960x1000.jpg" />
      </Badge>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Typography variant="inherit" noWrap color="inherit" sx={{ maxWidth: "calc((100%) - 55px)" }}>
          Someone name super extra large name
        </Typography>
      }
      secondary={
        <Typography variant="body2" noWrap sx={{ maxWidth: "calc((100%) - 55px)", color: "#aaa" }}>
          Someone name super extra large name
        </Typography>
      }
    />
    <ListItemSecondaryAction>
      <Stack direction="column" spacing={0} alignItems="end">
        <FormHelperText>14:00 PM</FormHelperText>
        {index ? <Chip label={index} size="small" color="primary" /> : <FormHelperText>.</FormHelperText>}
      </Stack>
    </ListItemSecondaryAction>
  </ListItemButton>
);

export default ContactItem;
