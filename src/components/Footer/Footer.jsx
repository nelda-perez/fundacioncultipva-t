import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ItemFooter } from "./component";
import "./footer.css";

function footer() {
  return (
    <footer>
      <div className="container container-link">
        <ItemFooter
          icon="address"
          link="https://goo.gl/maps/zsRgrJUbAPvEucLc9"
          content="Kra.76a Sur No.62 K 48"
        />
        <ItemFooter
          icon="phone"
          link="https://wa.me/+573132112921"
          content="3132112921"
        />
        <ItemFooter
          icon="email"
          link="mailto:contactenos@fundacioncultivar.org"
          content="contactenos@fundacioncultivar.org"
        />
        <ItemFooter icon="info" link="/rte" content="Transparencia" />
      </div>
      <div className="containerIcon">
        <a href="https://www.facebook.com/CultipvaT" target="_blank">
          {<FacebookIcon sx={{ fontSize: "35px" }} />}
        </a>
        <a href="https://instagram.com/cultipvat" target="_blank">
          {<InstagramIcon sx={{ fontSize: "35px" }} />}
        </a>
        <a
          href="https://www.youtube.com/@fundacioncultipva-t5326"
          target="_blank">
          {<YouTubeIcon sx={{ fontSize: "35px" }} />}
        </a>
      </div>
    </footer>
  );
}
export default footer;
