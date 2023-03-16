import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.jpg";
import { drawerWidth, pages, AppBar, DrawerHeader } from "../../utilities";
import "./header.css";

function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{ bgcolor: "var(--dark-green)" }}>
        <Toolbar>
          <Link to="/">
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Logo Fundacion Cultivando Principios y Valores Para Transformar"
                src={logo}
              />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            align="center"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div">
            FUNDACIÓN CULTIPVA-T
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {pages.map((pag) => (
              <Link key={pag.page} to={pag.route} className="optionStyleText">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{pag.icon}</ListItemIcon>
                    <ListItemText primary={pag.page} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </SwipeableDrawer>
    </>
  );
}

export default Header;
