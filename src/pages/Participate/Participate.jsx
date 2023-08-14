import { ContainerPage } from "../../components";
import { PARTICIPATE } from "../../database";
import { ArticleParticipate } from "./components";
import style from "./participe.module.scss";
import p_1 from "../../assets/parti1.png";
import p_2 from "../../assets/parti2.png";
import p_3 from "../../assets/parti3.png";

function Participate() {
  const images = [p_1, p_2, p_3];
  return (
    <ContainerPage>
      <div className={style.container}>
        {PARTICIPATE.map((part, index) => (
          <ArticleParticipate
            key={part.key}
            contributions={part.contributions}
            title={part.title}
            description={part.description}
            metafora={part.metafora}
            links={part.links}
            img={images[index]}
          />
        ))}
      </div>
    </ContainerPage>
  );
}
export default Participate;
