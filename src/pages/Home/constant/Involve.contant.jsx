import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const INVOLVES = [
  {
    key: 0,
    title: "Tiempo",
    icon: <HourglassTopIcon sx={{ fontSize: "60px" }} />,
    description:
      "Hay diferentes opciones para participar. Invierte tiempo en las diferentes actividades que se desarrollan semanalmente",
  },
  {
    key: 1,
    title: "Talentos",
    icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    description:
      "Desarrolla tus dones y talentos poniendolos al servicio, ayudando a otros.",
  },
  {
    key: 2,
    title: "Donar",
    icon: <CurrencyExchangeIcon sx={{ fontSize: "60px" }} />,
    description: "Recibimos tus aportes en dinero y otros.",
  },
];
