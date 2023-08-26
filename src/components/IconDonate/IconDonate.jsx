import style from "./iconDonate.module.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function IconDonate() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+573132112921&text=Hola,%20quiero%20informaci%C3%B3n%20para%20poder%20donar%20en%20la%20fundaci%C3%B3n"
      target="_blank"
      className={style.btnDonate}>
      <AttachMoneyIcon sx={{fontSize:"60px"}} />
    </a>
  );
}
export default IconDonate;
