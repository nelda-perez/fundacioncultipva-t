import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

export const PAGES = [
  {
    page: "Inicio",
    route: "/",
    icon: <HomeIcon sx={{ color: "var(--main-color)" }} />,
  },
  {
    page: "Quienes Somos",
    route: "/about",
    icon: <ContactsIcon sx={{ color: "var(--main-color)" }} />,
  },
];
