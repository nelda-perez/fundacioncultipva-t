import { PROGRAMS } from "../../constant";
import "../index.css";

function ProgramCard() {
  return (
    <>
      {PROGRAMS.map((item) => (
        <section key={item.key} className="card hover programCard">
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.info}</p>
          </div>
          {item.img ? (
            <img className="hover" src={item.img} width="350" />
          ) : (
            <iframe
              className="hover"
              src={item.link}
              autoPlay
              controls></iframe>
          )}
        </section>
      ))}
    </>
  );
}
export default ProgramCard;
