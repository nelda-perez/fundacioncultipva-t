import MenuIcon from "@mui/icons-material/Menu";
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
import style from "./header.module.scss";

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
            <Link to={ROUTES.HOME.path} className={style.containerLogo}>
              <figure>
                <img src={logo} alt="Logo Fundacion Cultipva-t" />
              </figure>
              <div className={style.textLogo}>
                <p className={style.firstText}>CULTIPVA-T</p>
                <p className={style.secondText}>
                  Cultivando principios y valores para transformar
                </p>
              </div>
            </Link>

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
                  className={({ isActive }) => (isActive ? "link active" : "link")}
                  onClick={handleCloseNavMenu}>
                  {page.name}
                </NavLink>
              ))}
            </Box>

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
                      className="color_black all_link"
                      onClick={handleCloseNavMenu}>
                      {page.name}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
          <Toolbar sx={{ justifyContent: "center" }}>
            <span className={style.slogan}>
              Reconstruyendo nuestra nación una vida a la vez
            </span>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
