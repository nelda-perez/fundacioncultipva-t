'use client';

import { ROUTES } from '../constants/routes';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import logo from '../app/icon.png';
import { AppBar } from '../utilities';
import style from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface Props {
  pages: any[];
}

function Header({ pages }: Props) {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
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
          background: 'var(--main-gradient)'
        }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Link href={ROUTES.HOME.path} className={style.containerLogo}>
              <figure>
                <Image
                  src={logo}
                  alt="Logo Fundacion Cultipva-t"
                  width={100}
                  height={100}
                />
              </figure>
              <div className={style.textLogo}>
                <p className={style.firstText}>CULTIPVA-T</p>
                <p className={style.secondText}>{t('header_text_top')}</p>
              </div>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                gap: '15px'
              }}>
              {pages.map(page => (
                <Link
                  className={style.link}
                  href={page.path}
                  key={page.path}
                  onClick={handleCloseNavMenu}>
                  {t(page.name)}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'flex-end'
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
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}>
                {pages.map(page => (
                  <MenuItem key={page.path}>
                    <Link
                      href={page.path}
                      className="color_black all_link"
                      onClick={handleCloseNavMenu}>
                      {t(page.name)}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <span className={style.slogan}>{t('reconstruye_nacion')}</span>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
