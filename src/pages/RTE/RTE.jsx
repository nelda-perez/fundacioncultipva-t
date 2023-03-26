import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PDF from "../../assets/rte.pdf";

function RTE() {
  return (
    <>
      <h1>Descargar Documentos</h1>
      <a href={PDF}>
        <span>
          <PictureAsPdfIcon sx={{ fontSize: "60px", color: "red" }} />
        </span>
        <span style={{ color: "black" }}>RTE</span>
      </a>
    </>
  );
}
export default RTE;
