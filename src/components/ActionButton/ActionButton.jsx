import { NavLink } from "react-router-dom";
import style from "./actionButton.module.scss";

function ActionButton({ textButton, path }) {
  return (
    <NavLink to={path} className={style.button}>
      {textButton}
    </NavLink>
  );
}
export default ActionButton;
