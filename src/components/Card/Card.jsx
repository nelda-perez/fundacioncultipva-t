import ActionButton from "../ActionButton/ActionButton";
import stylesCard from "./card.module.scss";

function Card({ title, description, path }) {
  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.cardDetails}>
        <p className={stylesCard.title}>{title}</p>
        <p className={stylesCard.body}>{description}</p>
        <div className={stylesCard.cardButton}>
          <ActionButton textButton="Ver más" path={path} />
        </div>
      </div>
    </div>
  );
}
export default Card;
