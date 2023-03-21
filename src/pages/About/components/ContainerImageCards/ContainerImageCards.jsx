import { infoMembers } from "../../../../utilities";
import { ImageCards } from "../ImageCards";

function ContainerImageCards() {
  return (
    <div>
      {infoMembers.map((item) => (
        <div key={item.key}>
          <h2 className="title-card">{item.title}</h2>
          <div className="imageCard-container">
            {item.members.map((member) => (
              <ImageCards key={member.key} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ContainerImageCards;
