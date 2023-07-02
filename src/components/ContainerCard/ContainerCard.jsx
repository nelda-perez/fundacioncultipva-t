import Card from "../Card/Card";
import style from "./containerCard.module.css";

function ContainerCard({ infoCards, principalPath }) {
  return (
    <section className={style.container}>
      {infoCards.map((info) => (
        <Card
          key={info.key}
          title={info.title}
          description={info.description}
          path={`${principalPath}#${info.path}`}
        />
      ))}
    </section>
  );
}
export default ContainerCard;
