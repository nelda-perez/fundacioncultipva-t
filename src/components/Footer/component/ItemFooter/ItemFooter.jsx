import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import InfoIcon from "@mui/icons-material/Info";

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
        <a href={link} target="_blank">{content}</a>
      </span>
    </div>
  );
}
export default ItemFooter;
