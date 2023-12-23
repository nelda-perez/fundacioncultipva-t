import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

export const drawerWidth = 240;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}));
