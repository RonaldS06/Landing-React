import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Button,
  ContactoContainerStyled,
  DatoForm,
  FormContacto,
  LabelForm,
  TitleContacto,
} from "./ContactoStyles";
import Footer from "../../components/Footer/Footer";

const Contacto = () => {
  const handleSubmit = () => {
    alert("Muchas Gracias por contactarte, en breve te responderemos");
  };
  return (
    <>
      <Navbar />

      <ContactoContainerStyled>
        <TitleContacto>Ingrese sus datos</TitleContacto>
        <FormContacto>
          <DatoForm>
            <LabelForm>Nombre</LabelForm>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              autocomplete="off"
              name="nombre"
            />
          </DatoForm>
          <DatoForm>
            <LabelForm>Apellido</LabelForm>
            <input
              type="text"
              placeholder="Ingresa tu apellido"
              autocomplete="off"
              name="apellido"
            />
          </DatoForm>
          <DatoForm>
            <LabelForm>Email</LabelForm>
            <input
              type="text"
              placeholder="Ingresa tu email"
              autocomplete="off"
              name="email"
            />
          </DatoForm>
          <DatoForm>
            <LabelForm>Asunto</LabelForm>
            <input
              type="text"
              placeholder="Ingresa tu asunto"
              autocomplete="off"
              name="asunto"
            />
          </DatoForm>

          <Button onClick={handleSubmit}>Enviar</Button>
        </FormContacto>
        <Footer />
      </ContactoContainerStyled>
    </>
  );
};

export default Contacto;
