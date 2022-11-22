import { TextField, TextFieldProps } from "@mui/material";

const Input = ({ ...rest }: TextFieldProps) => {
  return (
    <TextField
      size="small"
      {...rest}
      sx={{ bgcolor: "#000", borderRadius: 1, width: rest.fullWidth ? "100%" : 300, ...rest.sx }}
    />
  );
};

export default Input;
