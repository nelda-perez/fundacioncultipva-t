import "../ImageCard.css";

function ImageCards({ member }) {
  const { imageUrl, name, job, skill, description } = member;

  return (
    <div class="image-card__container">
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
          <p>{skill}</p>
        </div>
      </div>
    </div>
  );
}
export default ImageCards;
