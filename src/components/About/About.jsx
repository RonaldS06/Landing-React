import { AboutContainerStyled, InfoTextStyled } from "./AboutStyled";

const About = () => {
  return (
    <AboutContainerStyled>
      <img src="about.png" alt="Zapatillas About" id="nosotros" />

      <InfoTextStyled>
        <h2>Ofrecemos calzado de alta calidad</h2>
        <p>
          En nuestra búsqueda constante de excelencia, nos enorgullece presentar
          una selección de calzado que supera tus expectativas en cuanto a
          calidad. Cada par de zapatos que ofrecemos es un testimonio de nuestro
          compromiso con la artesanía, la durabilidad y el confort. Explora
          nuestra colección y descubre cómo la calidad se traduce en cada paso
          que das. Entra en un mundo de elegancia y confianza, donde tus pies
          merecen lo mejor.
        </p>
        <h2>2897</h2>
      </InfoTextStyled>
    </AboutContainerStyled>
  );
};

export default About;
