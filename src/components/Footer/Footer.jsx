import logo from '../../assets/logo.png'
import terms from '../../assets/Tratamiento_de_datos_2023.pdf'
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ItemFooter } from "./component";
import "./footer.scss";

function footer() {
  return (
    <footer>
        <div className="wave"></div>
      <section className="containerRows">
        <div className="containerTerms">
          <figure className="footerLogo">
            <img src={logo} alt="logo" />
          </figure>
          <a href={terms} target="_blank">Tratamiento de datos</a>
        </div>
        <div className="container container-link">
          <div className="containerItems">
            <ItemFooter
              icon="address"
              link="https://goo.gl/maps/ncJVDW3rP3PoLWsL7"
              content="Kra.76a Sur No.62 K 48"
            />
            <ItemFooter
              icon="phone"
              link="https://wa.me/+573132112921"
              content="3132112921"
            />
          </div>
          <div className="containerItems">
            <ItemFooter
              icon="email"
              link="mailto:contactenos@fundacioncultivar.org"
              content="contactenos@fundacioncultivar.org"
            />
            <ItemFooter icon="info" link="/rte" content="Transparencia" />
          </div>
        </div>
        <div className="containerIcon">
          <a
            className="socialContainer containerInsta"
            href="https://instagram.com/cultipvat"
            target="_blank">
            {<InstagramIcon sx={{ fontSize: "35px" }} />}
          </a>
          <a
            className="socialContainer containerYou"
            href="https://www.youtube.com/@fundacioncultipva-t5326"
            target="_blank">
            {<YouTubeIcon sx={{ fontSize: "35px" }} />}
          </a>
        </div>
      </section>
      <p className="textCopyrigth">
        Copyright © 2023. Todos los derechos reservados.
      </p>
    </footer>
  );
}
export default footer;
