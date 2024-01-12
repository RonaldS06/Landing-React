// CartCardModal.jsx
import React from "react";
import {
  CartItem,
  CartProducts,
  ItemHandler,
  ItemImg,
  Price,
  ProductInfo,
  QuantityDown,
  QuantityUnidad,
  QuantityUp,
  Title,
  TitlePrice,
} from "./CartModalStyles";
import { useDispatch } from "react-redux";
import { ajustarCantidadProducto } from "./CarritoSlice"; // Corrige la importación

const CartCardModal = ({ producto }) => {
  const dispatch = useDispatch();
  const handleAjustarCantidad = (nuevaCantidad) => {
    dispatch(ajustarCantidadProducto({ id: producto.id, nuevaCantidad })); // Usa la acción ajustarCantidadProducto
  };
  if (!producto) {
    return null;
  }

  const handleMinus = () => {
    handleAjustarCantidad(producto.cantidad - 1);
  };
  const handleAdd = () => {
    handleAjustarCantidad(producto.cantidad + 1);
  };

  return (
    <CartProducts>
      <CartItem>
        <ProductInfo>
          <ItemImg src={`${producto.image}`} alt={producto.title} />
          <TitlePrice>
            <Title>{producto.title}</Title>
            <Price>${producto.price}</Price>
          </TitlePrice>
          <ItemHandler>
            <QuantityDown onClick={handleMinus}>-</QuantityDown>
            <QuantityUnidad>{producto.cantidad}</QuantityUnidad>
            <QuantityUp onClick={handleAdd}>+</QuantityUp>
          </ItemHandler>
        </ProductInfo>
      </CartItem>
    </CartProducts>
  );
};
export default CartCardModal;
