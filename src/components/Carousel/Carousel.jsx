import styles from "./carousel.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CarouselImages from "../CarouselImages/CarouselImages";
import { useRef } from "react";

function Carousel({ images, autoPlay }) {
  const imgRef = useRef(null);
  const quantityImgs = images?.length ?? 0;

  if (!Array.isArray(images) || quantityImgs === 0) return;

  const next = () => {
    imgRef.current?.next();
  };

  const previous = () => {
    imgRef.current?.previous();
  };
  return (
    <article className={styles.containerImg}>
      <button className={styles.left} onClick={previous}>
        <FiChevronLeft />
      </button>
      <CarouselImages
        images={images}
        autoPlay={autoPlay}
        hasWords={true}
        ref={imgRef}
      />
      <button className={styles.rigth} onClick={next}>
        <FiChevronRight />
      </button>
    </article>
  );
}
export default Carousel;
