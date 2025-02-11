// const { red } = require("@mui/material/colors");

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          //   primary: {
          //     main: "#1976d2",
          //   },
          //   secondary: {
          //     main: "#dc004e",
          //   },
          //   error: {
          //     main: red.A400,
          //   },
          //   background: {
          //     default: "#f4f6f8",
          //     paper: "#ffffff",
          //   },
          // light theme
        }
      : {
          //   primary: {
          //     main: "#90caf9",
          //   },
          //   secondary: {
          //     main: "#f48fb1",
          //   },
          //   error: {
          //     main: red.A400,
          //   },
          //   background: {
          //     default: "#303030",
          //     paper: "#424242",
          //   },
          // dark theme
        }),
  },
});
