import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Button,
  ContactoContainerStyled,
  DatoForm,
  FormContacto,
  LabelForm,
  TitleContacto,
  AsuntoForm,
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
              required
            />
          </DatoForm>
          <DatoForm>
            <LabelForm>Apellido</LabelForm>
            <input
              type="text"
              placeholder="Ingresa tu apellido"
              autocomplete="off"
              name="apellido"
              required
            />
          </DatoForm>
          <DatoForm>
            <LabelForm>Email</LabelForm>
            <input
              type="email"
              placeholder="Ingresa tu email"
              autocomplete="off"
              name="email"
              required
            />
          </DatoForm>
          <DatoForm>
            <LabelForm>Asunto</LabelForm>
            <AsuntoForm placeholder="Ingresa aca tu mensaje" rows="5" required />
          </DatoForm>

          <Button onClick={handleSubmit}>Enviar</Button>
        </FormContacto>
        <Footer />
      </ContactoContainerStyled>
    </>
  );
};

export default Contacto;
