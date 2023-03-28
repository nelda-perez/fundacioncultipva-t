import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { FILESPDF } from "../../constant";
import RTE2021 from "../../../../assets/rte.pdf";
import RTE2022 from "../../../../assets/rte2022.pdf";

function ItemPdf() {
  const File = {
    rte2021: RTE2021,
    rte2022: RTE2022,
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
