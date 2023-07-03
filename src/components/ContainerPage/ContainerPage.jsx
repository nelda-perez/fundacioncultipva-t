import style from "./containerPage.module.css"

function ContainerPage({ children }) {
  return <article className={style.container}>{children}</article>;
}
export default ContainerPage;
