import style from "./floatContent.module.scss";
import arrow from "../../../../assets/flecha verde.png";

function FloatContent({ children, update, hasIcon = true }) {
  return (
    <div className={`${style.content} ${style[update]}`}>
      {children} {hasIcon && <img className={style.arrow} src={arrow} alt="flecha" />}
    </div>
  );
}
export default FloatContent;
