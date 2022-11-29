import { Search } from "@mui/icons-material";
import { InputAdornment, List, ListSubheader, Stack, Typography } from "@mui/material";
import { useWebSocketContext } from "../context/webSocketContext";
import { sharedStyles } from "../utils/consts";
import CardContainer from "./CardContainer";
import ContactItem from "./ContactItem";
import Input from "./Input";

const ContactsContainer = () => {
  const { contacts } = useWebSocketContext();
  return (
    <CardContainer sx={{ bgcolor: "#22222a", ...sharedStyles }}>
      <Stack spacing={3} direction="column">
        <Typography variant="h4" component="h1">
          Mensajes
        </Typography>

        <Input
          label="Buscar..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Stack sx={{ overflowY: "auto", height: "calc((100vh) - 310px)" }}>
          <List subheader={<ListSubheader>Recibidos</ListSubheader>}>
            {contacts.map((item) => (
              <ContactItem client={item} key={item._id} />
            ))}
          </List>

          {/* <List subheader={<ListSubheader>Todos los mensajes</ListSubheader>}>
            {[7, 1, 0, 4, 3].map((item) => (
              <ContactItem index={item} />
            ))}
          </List> */}
        </Stack>
      </Stack>
    </CardContainer>
  );
};

export default ContactsContainer;
