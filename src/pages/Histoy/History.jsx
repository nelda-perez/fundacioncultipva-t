import { ContainerPage } from "../../components";
import styles from "./history.module.css";

function History() {
  return (
    <ContainerPage>
      <h1 className={styles.title}>Historia</h1>
      <p>
        El compromiso de Cultivap-t empezó con un sueño que se transformó,
        gracias a una visión dada por Dios. La palabra contenida en
        <b> Génesis 12:1 </b>
        significó años de trabajo buscando estrategias para beneficiar a niños y
        jóvenes huérfanos que estaban bajo el sistema de protección del ICBF, en
        Colombia.
      </p>
      <p>
        Este recorrido implicó conocer estrategias que se concentraban, por un
        lado, en los jóvenes no adoptados en los programas del ICBF y por otro
        lado en el trabajo que desarrollaban organizaciones humanitarias que
        ofrecían apoyo académico, económico, espiritual, emocional, laboral, etc
        a jóvenes que abandonaban estos programas estatales.
      </p>
      <p>
        Sin embargo, las limitaciones de estas accionens hicieron que Cultivap-t
        identificara una ruta más efectiva para la transformación de la vida de
        estos jóvenes en condiciones de orfandad. Es así como la enseñanza
        bíblica mostró que solo Dios, a través de los principios y valores
        consignados en el evangelio, es capaz de transformar vidas y restaurar
        una nación enferma.
      </p>
      <p>
        La fundación Culstivap-t fue creada el <b>25 de Julio de 2019</b> y registrada
        en cámara de comercio <b>___________ (fecha)</b> Hasta ahora, Cultivap-t ha
        actuado en las comunidades de el sector de Altos de la Estancia en
        Ciudad Bolívar.
      </p>
      <p>
        El objetivo es ir hasta donde está la necesidad y llevar la provición
        indicada para cada caso. En diciembre del año 2021 se inicia el proyecto
        en Ciudad Bolívar con 22 jóvenes, abandonados y huérfanos, como parte
        del proyecto las acciones de la fundación se han extendido a otros
        habitantes del sector y familias de esa misma comunidad.
      </p>
      <h2 className={styles.subtitle}>¿Qué hacer y cómo hacerlo?</h2>
      <p>
        Ante las dificultades para desarrollar un proyecto directamente con
        ICBF, la Fundación atendió una solicitud de la comunidad Altos de la
        Estancia, en Ciudad Bolívar y allí comenzó el proceso con la comunidad.
      </p>
      <p>
        Cultivap-t se unió a otras entidades, en esa zona de Bogotá, y así
        comenzó a trabajar con sus jóvenes para que recobraran la identidad
        distorcionada y adquirieran una verdadera identidad en Cristo. En el año
        2022 se inició el proceso de formación de líderes con los jóvenes
        involucrados.
      </p>
      <br />
      <p className={styles.phrase}>
        <b>
          El objetivo es seguir actuando para que la Gran Comisión se haga
          realidad en las comuidades más vulnerables.
        </b>
      </p>
    </ContainerPage>
  );
}
export default History;
