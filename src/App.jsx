import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Main } from "./styles/Main";

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <Products />
      </Main>
      <About />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
