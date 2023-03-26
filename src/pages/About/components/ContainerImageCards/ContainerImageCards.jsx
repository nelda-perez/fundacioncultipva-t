function ContainerImageCards({ team, children }) {
  return (
    <>
      <h2 className="team-title">{team.title}</h2>
      <div className="container">{children}</div>
    </>
  );
}
export default ContainerImageCards;
