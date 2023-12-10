import { AboutContainerStyled, InfoTextStyled } from "./NosotrosStyles";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <AboutContainerStyled>
        <img src="nosotros1.png" alt="nosotros" id="nosotros" />
        <InfoTextStyled>
          <h2>Ofrecemos calzado de alta calidad</h2>
          <p>
            En nuestra búsqueda constante de excelencia, nos enorgullece
            presentar una selección de calzado que supera tus expectativas en
            cuanto a calidad. Cada par de zapatos que ofrecemos es un testimonio
            de nuestro compromiso con la artesanía, la durabilidad y el confort.
            Explora nuestra colección y descubre cómo la calidad se traduce en
            cada paso que das. Entra en un mundo de elegancia y confianza, donde
            tus pies merecen lo mejor.
          </p>
        </InfoTextStyled>
      </AboutContainerStyled>
      <Footer />
    </>
  );
};

export default Nosotros;
