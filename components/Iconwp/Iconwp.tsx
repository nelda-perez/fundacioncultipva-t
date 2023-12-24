import style from './btn-whatsapp.module.css';
import whatsAppImg from '@/public/assets/icon-whatsapp.svg';
import Image from 'next/image';

function Iconwp() {
  return (
    <a
      href="https://wa.me/+573132112921"
      target="_blank"
      className={style.btnWhatsapp}>
      <Image src={whatsAppImg} alt="Contactar por WhatsApp" />
    </a>
  );
}
export default Iconwp;
