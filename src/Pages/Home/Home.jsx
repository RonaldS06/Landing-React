import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Main from "../../styles/Main/Main";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <Products />
      </Main>
      <About />
      <Footer />
    </>
  );
};

export default Home;
