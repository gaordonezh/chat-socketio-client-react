import { ReactNode, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";

const ThemeConfig = ({ children }: { children: ReactNode }) => {
  const themeOptions: any = useMemo(() => ({ palette, shape, typography }), []);
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
