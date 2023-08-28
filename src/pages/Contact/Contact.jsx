import { useRef } from "react";
import {
  ActionButton,
  ContainerPage,
  CustomForm,
  InputForm,
} from "../../components";
import { regex } from "../../constant";

const MESSAGE_ERROR = {
  email: "El correo electronico es requerido",
  name: "El nombre es requerido",
  subject: "El asunto es requerido",
};

function Contact() {
  const emailInput = useRef(null);
  const nameInput = useRef(null);
  const subjectInput = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    const target = event.target;
    const formData = new FormData(target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const isComplete = {
      email: emailInput.current?.isValidInput(),
      name: nameInput.current?.isValidInput(),
      subject: subjectInput.current?.isValidInput(),
    };
    const validateInputs = Object.values(isComplete).every((value) => value);
    if (!validateInputs) {
      return;
    }
  };

  return (
    <ContainerPage>
      <CustomForm title="Contáctenos" onSubmit={sendEmail}>
        <InputForm
          name="Nombre"
          msgError={MESSAGE_ERROR.name}
          validator={regex.name}
          ref={nameInput}
        />

        <InputForm
          name="Correo electronico"
          type="email"
          msgError={MESSAGE_ERROR.email}
          validator={regex.email}
          ref={emailInput}
        />

        <InputForm
          name="Asunto"
          type="text"
          msgError={MESSAGE_ERROR.subject}
          validator={regex.subject}
          ref={subjectInput}
        />

        <ActionButton textButton="ENVIAR" isButton={true} />
      </CustomForm>
    </ContainerPage>
  );
}
export default Contact;
