import '../ImageCard.css';

function ImageCards({ member }: { member: any }) {
  const { imageUrl, name, job, description } = member;

  return (
    <article className="image-card__container hover">
      <div className="testimonials-header"></div>
      <div className="testimonials-info">
        <div className="testimonials-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="testimonials-quote">
          <p>{description}</p>
        </div>
        <div className="testimonials-name">
          <h3>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </article>
  );
}
export default ImageCards;
