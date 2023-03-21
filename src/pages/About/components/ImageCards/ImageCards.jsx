import { useState } from "react";
import "../ImageCard.css";

function ImageCards({ member }) {
  const [flipped, setFlipped] = useState(false);

  const { imageUrl, name, job, skill, description } = member;
  function handleClick() {
    setFlipped(!flipped);
  }

  return (
    <div
      className={`imageCard ${flipped ? "flipped" : ""}`}
      onClick={handleClick}>
      <div
        className="imageCard__face imageCard__face--front"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        {/* Contenido de la cara frontal */}
      </div>
      <div className="imageCard__face imageCard__face--back">
        <p className="imageCard__name">{name}</p>
        <p className="imageCard__skill-job">{skill}</p>
        <p className="imageCard__skill-job">{job}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ImageCards;
