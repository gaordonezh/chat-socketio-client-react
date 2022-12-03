import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import CardContainer from "./CardContainer";
import Input from "./Input";

const Header = () => {
  return (
    <CardContainer sx={{ bgcolor: "#1e1f24", borderBottom: "1px solid #111", textAlign: "center" }}>
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
    </CardContainer>
  );
};

export default Header;
