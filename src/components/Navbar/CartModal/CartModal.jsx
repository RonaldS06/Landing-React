import React, { useState } from "react";
import {
  ModalContainerStyled,
  ContainerCart,
  ButtonsCart,
  ButtonTotal,
  BtnPagar,
  PriceTotal,
  ImgDelete,
  TitleAndClose,
  IconClose,
  TitleH2,
  ModalStyledCart,
} from "./CartModalStyles"; // Asegúrate de crear estos estilos

import CartCardModal from "./CartCardModal";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { limpiarCarrito, selectCarrito } from "./CarritoSlice";
import ModalGral from "../../Modal/ModalGral";
import { BtnAceptar, ContenidoModal } from "../../Modal/ModalStyles";

const CartModal = ({ isOpen, onClose }) => {
  const carrito = useSelector(selectCarrito);
  const dispatch = useDispatch();

  const calcularSubtotal = () => {
    return carrito.productos.reduce(
      (total, producto) => total + producto.price * producto.cantidad,
      0
    );
  };

  //Funcion para el modal
  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);

  const ModalAvisoEliminar = () => {
    setEstadoModal2(!estadoModal2);
  };
  const LimpiarCarrito = () => {
    setEstadoModal2(!estadoModal2);
    dispatch(limpiarCarrito());
    onClose();
  };

  const ModalAvisoCompra = () => {
    setEstadoModal1(!estadoModal1);
  };

  const finalizarCompra = () => {
    setEstadoModal1(!estadoModal1);
    dispatch(limpiarCarrito());
    onClose();
  };

  return (
    <ModalContainerStyled>
      {/* Contenido del carrito y botones */}
      <ModalStyledCart>
        <TitleAndClose>
          {/* Mostrar el mensaje de compra exitosa */}
          <TitleH2>TUS PRODUCTOS</TitleH2>

          <IconClose>
            <motion.div whileTap={{ scale: 1.25 }}>
              <HiOutlineX onClick={onClose} />
            </motion.div>
          </IconClose>
        </TitleAndClose>
        <ContainerCart>
          {/* Aca va CartCardModal */}
          {carrito.productos.map((producto) => (
            <CartCardModal key={producto.id} producto={producto} />
          ))}
          {/* Fin va CartCardModal */}
        </ContainerCart>

        <ButtonsCart>
          {/* Icono imagen para borrar todos los productos */}
          <ImgDelete
            src="icon-delete.svg"
            alt="Icono borrar todos los productos"
            onClick={ModalAvisoEliminar}
            disabled={carrito.productos.length === 0}
          />
          {carrito.productos.length > 0 && (
            <ModalGral estado={estadoModal2} cambioEstado={setEstadoModal2}>
              <ContenidoModal>
                <h2>¿Eliminar todos los productos?</h2>
                <p>Se eliminaran todos tus productos del carrito</p>
                <BtnAceptar onClick={LimpiarCarrito}>Aceptar</BtnAceptar>
              </ContenidoModal>
            </ModalGral>
          )}

          {/* Boton para realizar la compra */}
          <ButtonTotal
            onClick={ModalAvisoCompra}
            disabled={carrito.productos.length === 0}
          >
            <BtnPagar>Ir a pagar</BtnPagar>
            <PriceTotal>Subtotal ${calcularSubtotal()}</PriceTotal>
          </ButtonTotal>
          {/* Modal Finalizar Compra */}
          {carrito.productos.length > 0 && (
            <ModalGral estado={estadoModal1} cambioEstado={setEstadoModal1}>
              <ContenidoModal>
                <h2>Desea Comprar?</h2>
                <p>Compra de forma segura en GoodAr</p>
                <BtnAceptar onClick={finalizarCompra}>Aceptar</BtnAceptar>
              </ContenidoModal>
            </ModalGral>
          )}
        </ButtonsCart>
      </ModalStyledCart>
    </ModalContainerStyled>
  );
};

export default CartModal;
