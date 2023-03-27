import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PDF from "../../assets/rte.pdf";
import "./rte.css";

function RTE() {
  return (
    <div className="container-rte">
      <h1 className="team-title">Descargar Documentos</h1>
      <a href={PDF}>
        <span>
          <PictureAsPdfIcon sx={{ fontSize: "60px", color: "red" }} />
        </span>
        <span style={{ color: "black" }}>RTE</span>
      </a>
    </div>
  );
}
export default RTE;
