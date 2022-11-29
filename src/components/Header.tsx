import { Search } from "@mui/icons-material";
import { InputAdornment, Stack, Typography } from "@mui/material";
import { useWebSocketContext } from "../context/webSocketContext";
import CardContainer from "./CardContainer";
import Input from "./Input";

const Header = () => {
  const { user } = useWebSocketContext();
  return (
    <CardContainer sx={{ bgcolor: "#1e1f24", borderBottom: "1px solid #111", textAlign: "center" }}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography>{`${user?.fullname}: ${user?.rol}`}</Typography>
        <Input
          label="Buscar cualquier cosa..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </CardContainer>
  );
};

export default Header;
