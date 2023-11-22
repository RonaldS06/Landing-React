import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  CardProductStyled,
  ContainerPricePurchaseStyled,
  ProductsContainerStyled,
  ProductsItemStyled,
} from "./ProductosStyled";

import { motion } from "framer-motion";

const ProductsArray = [
  {
    id: 1,
    title: "Nike Air 90 Red",
    price: "190",
    image: "producto1.png",
    color: "#FFDBDF",
  },
  {
    id: 2,
    title: "Nike Run Ultra",
    price: "220",
    image: "producto2.png",
    color: "#E0E3E5",
  },
  {
    id: 3,
    title: "Nike Air 90 Blue",
    price: "205",
    image: "producto3.png",
    color: "#DBEFFF",
  },
  {
    id: 4,
    title: "Nike Air Free 5.0",
    price: "160",
    image: "producto4.png",
    color: "#FFE8DB",
  },
  {
    id: 5,
    title: "Nike Air Free 2.0",
    price: "160",
    image: "producto5.png",
    color: "#DBEFFF",
  },
  {
    id: 6,
    title: "Nike Air MAX",
    price: "160",
    image: "producto6.png",
    color: "#e1e9db",
  },
  {
    id: 7,
    title: "Nike Air Max 720",
    price: "160",
    image: "producto7.png",
    color: "#FFDBDF",
  },
  {
    id: 8,
    title: "Vans Plataforma Old",
    price: "160",
    image: "producto8.png",
    color: "#dbe8ff",
  },
];

const TitleProducts = () => {
  return (
    <ProductsContainerStyled>
      <h2 id="productos">
        Nuestros <span>Productos</span>
      </h2>
      <h3>
        Descubre cómo puedes elevar tu estilo a través de la elección del
        calzado adecuado.
      </h3>
    </ProductsContainerStyled>
  );
};

const ProductsCard = ({ id, title, price, color, image }) => {
  return (
    <CardProductStyled color={color} id={id}>
      <img src={image} alt="Producto1" />
      <h4>{title}</h4>
      <ContainerPricePurchaseStyled>
        <p>${price}</p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <a href="#producto">Comprar</a>
        </motion.div>
      </ContainerPricePurchaseStyled>
    </CardProductStyled>
  );
};

const Productos = () => {
  return (
    <>
      <Navbar />
      <TitleProducts />
      <ProductsItemStyled>
        {ProductsArray.map((producto) => (
          <ProductsCard
            id={producto.id}
            title={producto.title}
            price={producto.price}
            color={producto.color}
            image={producto.image}
          />
        ))}
      </ProductsItemStyled>
      <Footer />
    </>
  );
};

export default Productos;
