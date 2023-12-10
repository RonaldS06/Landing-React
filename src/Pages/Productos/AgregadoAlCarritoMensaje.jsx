import React from "react";
import { AgregarCarritoMensaje } from "./ProductosStyled";

const AgregadoAlCarritoMensaje = ({ mensaje }) => {
  return (
    <AgregarCarritoMensaje>
      <p>{mensaje}</p>
    </AgregarCarritoMensaje>
  );
};

export default AgregadoAlCarritoMensaje;
