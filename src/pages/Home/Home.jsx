import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
import slide5 from "../../assets/slide-5.jpg";
import slide6 from "../../assets/slide-6.jpg";
import slide8 from "../../assets/slide-8.jpg";
import {
  ActionButton,
  Carousel,
  ContainerCard,
  ContainerPage,
} from "../../components";
import { ROUTES } from "../../constant";
import { CARD_ACTIONS } from "../../database";
import styleHome from "./home.module.scss";

function Home() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide8];
  return (
    <>
      <Carousel images={images} autoPlay={true} />
      <ContainerPage>
        <p className={`${styleHome.text} ${styleHome.principalText}`}>
          Somos una organización internacional que trabaja en la transformación
        </p>
        <p className={`${styleHome.text} ${styleHome.principalText}`}>
          De la vida de niños, jóvenes y familias.
        </p>
        <p className={styleHome.text}>
          Servimos como mentores para que los principios y valores bíblicos
          traigan transformación que necesitan las comunidades. Trabajamos para
          expresar el amor de Dios y contribuir con el plan divino de restaurar
          la nación impactando una vida a la vez.
        </p>
        <p className={styleHome.text}>Ven y acompañanos en esta aventura</p>
        <div className={styleHome.containerButton}>
          <ActionButton
            textButton={"Quiero Participar"}
            path={ROUTES.PARTICIPATE.path}
          />
        </div>
      </ContainerPage>
      <ContainerPage>
        <ContainerCard infoCards={CARD_ACTIONS} principalPath={ROUTES.ACTION.path} />
      </ContainerPage>
    </>
  );
}
export default Home;
