import { PROGRAMS } from "../../constant";
import "../index.css";

function ProgramCard() {
  return (
    <>
      {PROGRAMS.map((item) => (
        <section key={item.key} className="programCard">
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.info}</p>
          </div>
          { item.img && <img className="img" src={item.img} width="350" /> }
        </section>
      ))}
    </>
  );
}
export default ProgramCard;
