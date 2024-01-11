//Contacto.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  ContactoContainerStyled,
  FormContacto,
  TitleContacto,
} from "./ContactoStyles";
import Footer from "../../components/Footer/Footer";
import Input from "./Input";

/* Formik & Up*/
import { useFormik } from "formik";
import * as Yup from "yup";
import { Submit } from "./Submit";
import ModalGral from "../../components/Modal/ModalGral";
import { BtnAceptar, ContenidoModal } from "../../components/Modal/ModalStyles";

// Validación del celular que debe contener mínimo 10 números
const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
  cellphone: Yup.string()
    .matches(phoneRegex, "Número de celular inválido")
    .required("Campo requerido"),
  message: Yup.string()
    .max(115, "Máximo de 115 carácteres")
    .required("Ingresa tu mensaje"),
});

const Contacto = () => {
  /*   const handleSubmit = () => {
    alert("Muchas Gracias por contactarte, en breve te responderemos");
  }; */
  //Modal para mostrar mensaje de enviado
  const [modalVisible, setModalVisible] = useState(false);

  const isEmpty = (values) => {
    return Object.values(values).some(
      (value) => typeof value === "string" && !value.trim().length
    );
  };
  //Función para mostrar el modal
  const mensajeContactoModal = () => {
    if (isValid && !isEmpty(values)) {
      setModalVisible(!modalVisible);
    }
  };

  // 1er paso es REQUERIRLO
  const { getFieldProps, handleSubmit, errors, touched, isValid, values } =
    useFormik({
      // 2do paso es Settearle los valores iniciales
      initialValues: {
        name: "",
        surname: "",
        email: "",
        cellphone: "",
        message: "",
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        console.log({ values });
        resetForm();
      },
    });

  return (
    <>
      <Navbar />

      <ContactoContainerStyled>
        <TitleContacto>Ingrese sus datos</TitleContacto>
        <FormContacto>
          {/* <DatoForm> */}
          <Input
            name="name"
            label="Nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            isError={touched.name && errors.name}
            {...getFieldProps("name")}
          ></Input>
          <Input
            name="surname"
            label="Apellido"
            type="text"
            placeholder="Ingresa tu apellido"
            isError={touched.surname && errors.surname}
            {...getFieldProps("surname")}
          ></Input>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Ingresa tu email"
            isError={touched.email && errors.email}
            {...getFieldProps("email")}
          ></Input>
          <Input
            name="cellphone"
            label="Teléfono"
            type="number"
            placeholder="Ingresa tu teléfono"
            isError={touched.cellphone && errors.cellphone}
            {...getFieldProps("cellphone")}
          ></Input>
          <Input
            name="message"
            label="Mensaje"
            type="text"
            placeholder="Ingresa tu mensaje. Máx 115 carácteres."
            isError={touched.message && errors.message}
            {...getFieldProps("message")}
          ></Input>
          <Submit
            onSubmit={() => {
              if (isValid && !isEmpty(values)) {
                handleSubmit();
                mensajeContactoModal();
              } else {
                console.log("Hay errores en el formulario o campos vacíos");
              }
            }}
          >
            Enviar
          </Submit>
        </FormContacto>
        {/* Modal aparecerá después de enviar el formulario */}
        <ModalGral estado={modalVisible} cambioEstado={setModalVisible}>
          {/* Contenido del modal */}
          <ContenidoModal>
            <h2>Su mensaje fue enviado</h2>
            <p>Pronto nos contactaremos con usted.</p>
          </ContenidoModal>
        </ModalGral>
        <Footer />
      </ContactoContainerStyled>
    </>
  );
};

export default Contacto;
