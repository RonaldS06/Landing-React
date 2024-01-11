//Submit.jsx

import React from "react";

import { ButtonSubmitStyled } from "./ContactoStyles";

export const Submit = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <ButtonSubmitStyled onClick={(e) => handleSubmit(e)} type="submit">
      Enviar
    </ButtonSubmitStyled>
  );
};
