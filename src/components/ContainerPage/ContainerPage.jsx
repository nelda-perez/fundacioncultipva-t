import style from "./containerPage.module.scss"

function ContainerPage({ children }) {
  return <article className={style.container}>{children}</article>;
}
export default ContainerPage;
