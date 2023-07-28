import style from "./btn-whatsapp.module.css";
import whatsAppImg from "../../assets/icon-whatsapp.svg";

function Iconwp() {
  return (
    <a
      href="https://wa.me/+573132112921"
      target="_blank"
      className={style.btnWhatsapp}>
      <img src={whatsAppImg} alt="Contactar por WhatsApp" />
    </a>
  );
}
export default Iconwp;
