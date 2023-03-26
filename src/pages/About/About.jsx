import { ContainerImageCards, ImageCards } from "./components";
import { TEAMS } from "./constant";

function About() {
  return (
    <>
      {TEAMS.map((team) => (
        <ContainerImageCards key={team.key} team={team}>
          {team.members.map((member) => (
            <ImageCards key={member.key} member={member} />
          ))}
        </ContainerImageCards>
      ))}
    </>
  );
}
export default About;
