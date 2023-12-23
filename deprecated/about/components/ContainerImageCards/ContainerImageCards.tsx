function ContainerImageCards({ team, children }: any) {
  return (
    <>
      <h2 className="team-title">{team.title}</h2>
      <div className="container container__image-card">{children}</div>
    </>
  );
}
export default ContainerImageCards;
