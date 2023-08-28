import { NavLink } from "react-router-dom";
import style from "./actionButton.module.scss";

function ActionButton({ textButton, path, isButton = false }) {
  return (
    <>
      {isButton ? (
        <button className={style.button} type="submit">
          {textButton}
        </button>
      ) : (
        <NavLink to={path} className={style.button}>
          {textButton}
        </NavLink>
      )}
    </>
  );
}
export default ActionButton;
