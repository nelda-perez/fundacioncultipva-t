import { INVOLVES } from "../../constant";

function InvolveCard() {
  return (
    <>
      <section className="card-container">
        {INVOLVES.map((card) => (
          <article key={card.key} className="card involveCard">
            <div className="icon">{card.icon}</div>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <div className="description">
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
export default InvolveCard;
