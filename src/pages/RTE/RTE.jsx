import { ContainerPage } from "../../components";
import { ItemPdf } from "./components";
import "./rte.scss";

function RTE() {
  return (
    <>
      <div className="container-rte">
        <h1 className="team-title">Documentos</h1>
        <ItemPdf />
      </div>
      <ContainerPage>
        <section className="section__rte">
          <p>
            La Fundación se constituyó el <b>25 de Julio de 2019</b>, se
            encuentra registrada en la Cámara de comercio de Bogotá bajo
            <b> Matrícula S0056373</b>.
          </p>
          <p>
            Cumplimos con todos los requisitos legales exigidos por la
            <b> Entidad de Vigilancia</b> y
            <b> Control de la Alcaldía Mayor de Bogotá</b>.
          </p>
          <p>
            Los recursos que se obtienen se concentran en el desarrollo del
            proyecto ubicado en <b>Altos de la Estancia</b> que beneficia a
            niños, jóvenes y familias.
          </p>
        </section>
      </ContainerPage>
    </>
  );
}
export default RTE;
