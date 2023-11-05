import React from "react";
import {
  HeroContainerStyled,
  HeroImgStyled,
  HeroInfoStyled,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyled>
      <span id="inicio"></span>
      <img src="detail1.png" alt="detalle1" />
      <HeroInfoStyled>
        <h1>
          Elevando tu estilo <span>personal</span>
        </h1>
        <p>
          En nuestro mundo de zapatillas, la comodidad y el estilo se entrelazan
          en una fusión perfecta. Cada paso que das, es una expresión de tu
          estilo personal, y estamos aquí para elevarlo.
        </p>
      </HeroInfoStyled>
      <HeroImgStyled>
        <img src="heroIMG_SM.png" alt="Zapatillas" />
      </HeroImgStyled>
    </HeroContainerStyled>
  );
};

export default Hero;
