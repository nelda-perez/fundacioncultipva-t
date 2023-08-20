import style from "./title.module.scss";

function Title({ title }) {
  return <h3 className={style.title}>{title}</h3>;
}
export default Title;
