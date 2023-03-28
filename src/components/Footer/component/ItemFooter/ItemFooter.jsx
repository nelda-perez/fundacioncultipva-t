import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

function ItemFooter({ icon, link, content }) {
  const ICON = {
    address: <AddLocationAltIcon />,
    phone: <AddIcCallIcon />,
    email: <MailOutlineIcon />,
    info: <InfoIcon />,
  };
  return (
    <div>
      <span className="span-footer">
        {ICON[icon]}
        <Link to={link}>{content}</Link>
      </span>
    </div>
  );
}
export default ItemFooter;
