import "../ImageCard.css";

function ImageCards({ member }) {
  const { imageUrl, name, job, description } = member;

  return (
    <article class="image-card__container hover">
      <div class="testimonials-header"></div>
      <div class="testimonials-info">
        <div class="testimonials-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div class="testimonials-quote">
          <p>{description}</p>
        </div>
        <div class="testimonials-name">
          <h3>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </article>
  );
}
export default ImageCards;
