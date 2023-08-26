import p1_1 from "../../assets/parti1.png";
import p1_2 from "../../assets/parti1_2.png";
import p1_3 from "../../assets/parti1_3.png";
import p2_1 from "../../assets/parti2_1.png";
import p2_2 from "../../assets/parti2_2.png";
import p2 from "../../assets/parti2.png";
import p3 from "../../assets/parti3.png";
import p3_1 from "../../assets/parti3_1.png";
import icon_1 from "../../assets/Manos corazon.png";
import imgElements from "../../assets/Elementos.png";
import { PARTICIPATE } from "../../database";
import { ElementsDescription, FloatContent, Title } from "./components";
import style from "./participe.module.scss";
import { useState, useEffect } from "react";

function Participate() {
  const [P1, P2, P3] = PARTICIPATE;
  const [moreSeven, setMoreSeven] = useState(false);

  const modifyWidth = () => {
    const widthScreen = window.innerWidth;
    setMoreSeven(widthScreen > 750);
  };

  useEffect(() => {
    window.addEventListener("resize", modifyWidth);

    return () => {
      window.removeEventListener("resize", modifyWidth);
    };
  });

  return moreSeven ? (
    <>
      <article className={style.container}>
        <section className={`${style.containerImage} ${style.addBackground}`}>
          <img className={style.image} src={p1_1} alt="mujer sonriendo" />
          <img className={style.icon1} src={icon_1} />
          <FloatContent update="left_yellow">
            <span className={style.spanText}>{P1.metafora}</span>
          </FloatContent>
        </section>
        <section className={style.sectionContent}>
          <Title title={P1.title} />
          <p className={style.text}>{P1.description}</p>
          <ElementsDescription list={P1.contributions} links={P1.links} />
        </section>
        <section className={`${style.left} ${style.first}`}>
          <img src={p1_2} alt="mujer entregando comida" />
          <img src={p1_3} alt="Grupo de personas juntando las manos" />
        </section>
      </article>
      <article className={`${style.container} ${style.secondArticle}`}>
        <section
          className={`${style.containerImage} ${style.backgroundYellow}`}>
          <img
            className={style.image}
            src={p2_1}
            alt="Niños recibiendo paquetes"
          />
          <img
            className={style.image}
            src={p2_2}
            alt="Personas empacando cosas"
          />
        </section>
        <section className={style.sectionContent}>
          <Title title={P2.title} />
          <ElementsDescription list={P2.contributions} />
          <FloatContent update="rigth_green">
            <img className={style.imgEle} src={imgElements} alt="Elementos" />
          </FloatContent>
        </section>
        <section className={`${style.left} ${style.second}`}>
          <img src={p2} alt="mujer sosteniendo dinero" />
        </section>
      </article>
      <article className={`${style.container} ${style.lastArticle}`}>
        <section className={`${style.containerImage} ${style.sectionOne}`}>
          <img className={style.image} src={p3} alt="mujer orando" />
          <FloatContent update="green" hasIcon={false} />
        </section>
        <section className={style.sectionContent}>
          <Title title={P3.title} />
          <ElementsDescription list={P3.contributions} />
        </section>
        <section className={`${style.left} ${style.sectionLast}`}>
          <figure>
            <img src={p3_1} alt="Personas con mano sobre la biblia" />
          </figure>
        </section>
      </article>
    </>
  ) : (
    <>
      <article className={style.container}>
        <section className={style.sectionContent}>
          <Title title={P1.title} />
          <div className={`${style.containerImage} ${style.addBackground}`}>
            <img className={style.image} src={p1_1} alt="mujer sonriendo" />
            <img className={style.icon1} src={icon_1} />
            <FloatContent update="left_yellow">
              <span className={style.spanText}>{P1.metafora}</span>
            </FloatContent>
          </div>
          <p className={style.text}>{P1.description}</p>
          <ElementsDescription list={P1.contributions} links={P1.links} />
        </section>
        <section className={`${style.left} ${style.first}`}>
          <img src={p1_2} alt="mujer entregando comida" />
          <img src={p1_3} alt="Grupo de personas juntando las manos" />
        </section>
      </article>
      <article className={`${style.container} ${style.secondArticle}`}>
        <section className={style.sectionContent}>
          <Title title={P2.title} />
          <div className={style.second}>
            <img src={p2} alt="mujer sosteniendo dinero" />
            <FloatContent update="rigth_green">
              <img className={style.imgEle} src={imgElements} alt="Elementos" />
            </FloatContent>
          </div>
          <ElementsDescription list={P2.contributions} />
        </section>
        <section
          className={`${style.containerImage} ${style.backgroundYellow}`}>
          <img
            className={style.image}
            src={p2_1}
            alt="Niños recibiendo paquetes"
          />
          <img
            className={style.image}
            src={p2_2}
            alt="Personas empacando cosas"
          />
        </section>
      </article>
      <article className={`${style.container} ${style.lastArticle}`}>
        <section className={style.sectionContent}>
          <Title title={P3.title} />
          <section className={`${style.containerImage} ${style.sectionOne}`}>
            <img className={style.image} src={p3} alt="mujer orando" />
            <FloatContent update="green" hasIcon={false} />
          </section>
          <ElementsDescription list={P3.contributions} />
        </section>
        <section className={`${style.left} ${style.sectionLast}`}>
          <figure>
            <img src={p3_1} alt="Personas con mano sobre la biblia" />
          </figure>
        </section>
      </article>
    </>
  );
}
export default Participate;
