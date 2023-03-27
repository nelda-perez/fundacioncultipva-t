import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { FILESPDF } from "../../constant";
import RTE2021 from "../../../../assets/rte.pdf";
import RUT2022 from "../../../../assets/Rut 15 03 23.pdf";
import ESF2022 from "../../../../assets/Estados financieros 2022 Cultipva-T Unificado.pdf";
import CRL2022 from "../../../../assets/Certificado de Representación Legal 24-03-23.pdf";

function ItemPdf() {
  const File = {
    rte2021: RTE2021,
    rut2022: RUT2022,
    esf2022: ESF2022,
    crl2022: CRL2022,
  };
  return (
    <>
      {FILESPDF.map((item) => (
        <a key={item.key} href={File[item.file]}>
          <span>
            <PictureAsPdfIcon sx={{ fontSize: "60px", color: "red" }} />
          </span>
          <span className="span-rte">{item.name}</span>
        </a>
      ))}
    </>
  );
}
export default ItemPdf;
