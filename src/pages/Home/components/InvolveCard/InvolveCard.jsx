import { INVOLVES } from "../../constant";

function InvolveCard() {
  return (
    <>
      <section class="card-container">
        {INVOLVES.map((card) => (
          <article key={card.key} class="card involveCard">
            <div class="icon">{card.icon}</div>
            <div class="title">
              <h2>{card.title}</h2>
            </div>
            <div class="description">
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
export default InvolveCard;
