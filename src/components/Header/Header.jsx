import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AppBar } from "../../utilities";
import { ROUTES } from "../../constant";

function Header({ pages }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "var(--main-gradient)",
        }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              className="displayHeader"
              variant="h6"
              noWrap
              sx={{
                color: "inherit",
                textDecoration: "none",
                fontFamily: "inherit",
                marginLeft: "36px",
              }}>
              <NavLink to={ROUTES.HOME.path} className="link">
                FUNDACIÓN CULTIVANDO PRINCIPIOS Y VALORES PARA TRANSFORMAR
              </NavLink>
            </Typography>
          </Toolbar>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
                fontFamily: "inherit",
                marginLeft: "36px",
              }}>
              <NavLink to={ROUTES.HOME.path} className="link">
                CULTIPVA-T
              </NavLink>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: "15px",
              }}>
              {pages.map((page) => (
                <NavLink
                  to={page.path}
                  key={page.path}
                  className="link"
                  onClick={handleCloseNavMenu}>
                  {page.name}
                </NavLink>
              ))}
            </Box>

            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                color: "inherit",
                textDecoration: "none",
                fontFamily: "inherit",
              }}>
              <NavLink to={ROUTES.HOME.path} className="link">
                CULTIPVA-T
              </NavLink>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page.path}>
                    <NavLink
                      to={page.path}
                      className="color_black"
                      onClick={handleCloseNavMenu}>
                      {page.name}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
          <Toolbar sx={{ justifyContent: "center" }}>
            <Link to={ROUTES.HOME.path}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Logo Fundacion Cultivando Principios y Valores Para Transformar"
                  src={logo}
                  sx={{ width: "200px", height: "200px", p: "0" }}
                />
              </IconButton>
            </Link>
            <Typography
              className="displayHeader"
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                fontSize: "32px",
                fontFamily: "var(--family)",
              }}
              component="div">
              Reconstruyendo nuestra nación una vida a la vez
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
