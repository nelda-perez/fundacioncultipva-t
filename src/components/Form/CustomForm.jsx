import style from "./customForm.module.scss";

function Form({ children, onSubmit, title }) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <h3 className={style.title}>{title}</h3>
      {children}
    </form>
  );
}
export default Form;
