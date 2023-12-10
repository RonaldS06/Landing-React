import React from "react";
import {
  BtnFiltro,
  ContainerFiltro,
  OptionFiltro,
  TitleFiltro,
} from "./PrecioFiltroStyled";

const PrecioFiltro = ({ onChange }) => {
  return (
    <ContainerFiltro>
      <TitleFiltro>Filtrar por precio:</TitleFiltro>
      <BtnFiltro onChange={(e) => onChange(e.target.value)}>
        <OptionFiltro value="menor">Menor a mayor</OptionFiltro>
        <OptionFiltro value="mayor">Mayor a menor</OptionFiltro>
      </BtnFiltro>
    </ContainerFiltro>
  );
};

export default PrecioFiltro;
