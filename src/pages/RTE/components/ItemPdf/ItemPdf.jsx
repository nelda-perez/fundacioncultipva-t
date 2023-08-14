import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { FILESPDF } from "../../constant";
import RTE2021 from "../../../../assets/rte.pdf";
import RTE2022 from "../../../../assets/rte2022.pdf";
import RUT2023 from "../../../../assets/Rut_Actual_2023.pdf"

function ItemPdf() {
  const File = {
    rte2021: RTE2021,
    rte2022: RTE2022,
    rut2023: RUT2023
  };
  return (
    <>
      {FILESPDF.map((item) => (
        <a key={item.key} href={File[item.file]} target="_blank">
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
