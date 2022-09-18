import { createTheme } from "@mui/material";

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            ...(mode === "light"
              ? {
                  background: "#f9f7f5",
                }
              : {
                  background: "#222",
                }),
          },
        },
      },
    },
  });

export default theme;
