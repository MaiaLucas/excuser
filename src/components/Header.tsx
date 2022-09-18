import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import { ThemeModeContext } from "../contexts/theme";
import { useContext } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header: NextPage = () => {
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        py: 3,
        px: 2,
      }}
    >
      <Typography component="span" variant="h5">
        Excuser
      </Typography>
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Header;
