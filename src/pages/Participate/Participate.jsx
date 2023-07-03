import { ContainerPage } from "../../components";
import { PARTICIPATE } from "../../database";
import { ArticleParticipate } from "./components";
import style from "./participe.module.css";
import slide3 from "../../assets/slide-3.jpg";
import slide5 from "../../assets/slide-5.jpg";
import slide6 from "../../assets/slide-6.jpg";

function Participate() {
  const images = [slide5, slide6, slide3];
  return (
    <ContainerPage>
      <div className={style.container}>
        {PARTICIPATE.map((part, index) => (
          <ArticleParticipate
            key={part.key}
            contributions={part.contributions}
            title={part.title}
            img={images[index]}
          />
        ))}
      </div>
    </ContainerPage>
  );
}
export default Participate;
