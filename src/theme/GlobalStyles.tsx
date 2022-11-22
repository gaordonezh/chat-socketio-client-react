import { useTheme } from "@mui/material/styles";
import { GlobalStyles as GlobalThemeStyles } from "@mui/material";

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        textarea: {
          "&::-webkit-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::-moz-placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          "&:-ms-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::placeholder": {
            color: theme.palette.text.disabled,
          },
        },

        img: { display: "block", maxWidth: "100%" },

        // Lazy Load Img
        ".blur-up": {
          WebkitFilter: "blur(5px)",
          filter: "blur(5px)",
          transition: "filter 400ms, -webkit-filter 400ms",
        },
        ".blur-up.lazyloaded ": {
          WebkitFilter: "blur(0)",
          filter: "blur(0)",
        },
        ".ant-notification-notice-with-icon svg": {
          fill: "#fff",
        },
        ".ant-notification-notice-success": {
          backgroundColor: "#52c41a !important",
          borderRadius: "5px !important",
        },
        ".ant-notification-notice-info": {
          backgroundColor: "#1890ff !important",
          borderRadius: "5px !important",
        },
        ".ant-notification-notice-error": {
          backgroundColor: "#ff4d4f !important",
          borderRadius: "5px !important",
        },
        ".ant-notification-notice-warning": {
          backgroundColor: "#faad15 !important",
          borderRadius: "5px !important",
        },
        ".ant-notification-notice-message": {
          color: "#fff !important",
          fontWeight: 600,
        },
        ".ant-notification-notice-description": {
          color: "#eee",
        },
        ".MuiModal-root": {
          zIndex: "999 !important",
        },
        "table tr th": {
          background: `${theme.palette.primary.main} !important`,
          color: "white !important",
          border: "1px solid rgba(200, 200, 200, 0.5)",
        },
        "table tr td": {
          border: "1px solid rgba(200, 200, 200, 0.5)",
        },

        ".ant-select-single .ant-select-selector": {
          height: "56px !important",
          borderRadius: "8px !important",
        },
        ".ant-select-single.ant-select-show-arrow .ant-select-selection-item": {
          lineHeight: "50px !important",
        },
        ".ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder": {
          lineHeight: "50px !important",
        },
        ".ant-select-selection-search": {
          fontSize: "16px !important",
          lineHeight: "50px !important",
        },
        ".ant-table-pagination .ant-select-single .ant-select-selector": {
          height: "32px !important",
          borderRadius: "2px !important",
        },
        ".ant-table-pagination .ant-select-show-arrow .ant-select-selection-item": {
          lineHeight: "32px !important",
        },
      }}
    />
  );
}
