import "./index.css";

const infoMembers = [
  {
    title: "Equipo de Apoyo Voluntario",
    members: {
      name: "Graciela Quijano Segura",
      skill: "Organizador en Coordinacion de eventos para fines sociales",
      job: "Voluntaria en Coordinacion de Proyectos de Emprendimiento y Autosostenibilidad en Fundación Cultipva-T",
      description: "",
    },
  },
];

function ImageCards() {
  return (
    <div>
      <div className="card-container">
        {infoMembers.map((item, index) => (
          <div key={index} className="card" data-info={item.members.job}>
            <img
              src="https://via.placeholder.com/200x200"
              alt="Imagen de la tarjeta"
            />
          </div>
        ))}
        <div class="card">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Imagen de la tarjeta"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x200"
            alt="Imagen de la tarjeta"
          />
        </div>
      </div>
    </div>
  );
}
export default ImageCards;
