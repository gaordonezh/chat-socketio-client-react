import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighter: "#0288d133",
  light: "#0288d175",
  main: "#0288d1",
  dark: "#1d4ed8",
  darker: "#005249",
  contrastText: "#f2f2f2",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#002964",
  dark: "#4b5563",
  darker: "#091A7A",
  contrastText: "#f2f2f2",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#0ea5e9",
  dark: "#0284c7",
  darker: "#04297A",
  contrastText: "#f2f2f2",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#10b981",
  dark: "#059669",
  darker: "#08660D",
  contrastText: "#f2f2f2",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#f59e0b",
  dark: "#d97706",
  darker: "#7A4F01",
  contrastText: "#f2f2f2",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#f43f5e",
  dark: "#e11d48",
  darker: "#7A0C2E",
  contrastText: "#f2f2f2",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const palette = {
  common: { black: "#000", white: "#fff" },
  mode: "dark",
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  /* text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] }, */
  background: { paper: "#1e1f24", default: "#424854", neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
