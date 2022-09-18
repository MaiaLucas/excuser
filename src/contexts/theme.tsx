import { ThemeProvider } from "@mui/material/styles";
import React, { createContext, useState } from "react";
import theme from "../theme";

export const ThemeModeContext = createContext({ toggleColorMode: () => {} });

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProviderContext: React.FC<ThemeProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const themeCustom = React.useMemo(() => theme(mode), [mode]);
  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeCustom}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
