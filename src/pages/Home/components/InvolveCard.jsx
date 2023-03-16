import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const informationCards = [
  {
    title: "Tiempo",
    icon: <HourglassTopIcon sx={{ fontSize: "60px" }} />,
    description:
      "Hay diferentes opciones para participar. Invierte tiempo en las diferentes actividades que se desarrollan semanalmente",
  },
  {
    title: "Talentos",
    icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    description:
      "Desarrolla tus dones y talentos poniendolos al servicio, ayudando a otros.",
  },
  {
    title: "Donar",
    icon: <CurrencyExchangeIcon sx={{ fontSize: "60px" }} />,
    description: "Recibimos tus aportes en dinero y otros.",
  },
];

function InvolveCard() {
  return (
    <>
      <section class="contenedor-tarjetas">
        {informationCards.map((card) => (
          <article key={card.title} class="card involveCard">
            <div class="icon">{card.icon}</div>
            <div class="title">
              <h2>{card.title}</h2>
            </div>
            <div class="description">
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
export default InvolveCard;
