import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const infoFooter = [
    {
    icon: <AddLocationAltIcon/>,
      content: "Bogotá, 111221,",
      link: "link direccion",
    },
    {
    icon: <AddIcCallIcon/>,
      content: "+57 313 211 2921",
      link: "link number",
    },
    {
    icon: <MailOutlineIcon/>,
      content: "contactenos@fundacioncultivar.org",
      link: "link email",
    },
  ];

   export const mediaicons = [
    {
      icon: <FacebookIcon sx={{ fontSize: "40px" }}/>,
      link:"https://www.facebook.com/CultipvaT" , 
  },
  
  {
    icon: <YouTubeIcon sx={{ fontSize: "40px" }}/>, 
    link:"https://www.youtube.com/",
  },
  
  {
    icon: <InstagramIcon sx={{ fontSize: "40px" }}/>,
    link:"https://instagram.com/cultipvat?igshid=YmMyMTA2M2Y=",
  },
  
  ];