import React from "react";
import {
  CardProductStyled,
  ContainerPricePurchaseStyled,
  ProductsContainerStyled,
  ProductsItemStyled,
} from "./ProductsStyles";

import { motion } from "framer-motion";

const ProductsArray = [
  {id:1, title: "Nike Air 90 Red", price: "190", image: "producto1.png", color: "#FFDBDF" },
  {id:2, title: "Nike Run Ultra", price: "220", image: "producto2.png", color: "#E0E3E5" },
  {id:3, title: "Nike Air 90 Blue", price: "205", image: "producto3.png", color: "#DBEFFF" },
  {id:4, title: "Nike Air Free 5.0", price: "160", image: "producto4.png", color: "#FFE8DB" },
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

const ProductsCard = ({id, title, price, color, image }) => {
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

export const Products = () => {
  return (
    <>
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
    </>
  );

  /*   return ProductsArray.map((productos) => {
    return (
      <ProductsCard
        title={productos.title}
        price={productos.price}
        color={productos.color}
      />
    );
  }); */
};

export default Products;
