import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
import slide5 from "../../assets/slide-5.jpg";
import slide6 from "../../assets/slide-6.jpg";
import slide8 from "../../assets/slide-8.jpg";
import { Carousel } from "../../components";
import { InvolveCard, ProgramCard } from "./components";

function Home() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide8];
  return (
    <>
      <Carousel images={images} autoPlay={true} />
      <article>
        <p>
          Somos una organización internacional que trabaja en la transformación
          de la vida de niños, jóvenes y familias.
        </p>
        <p>
          Servimos como mentores para que los principios y valores bíblicos
          traigan transformación que necesitan sus comunidades. Servimos para
          expresar el amor de Dios y contribuir con el plan divino de restaurar
          la nación impactando una vida a la vez.
        </p>
        Ven y acompañanos en esta aventura Botón QUIERO PARTICIPAR
      </article>
      <ProgramCard />
      {/* <InvolveCard /> */}
    </>
  );
}
export default Home;
