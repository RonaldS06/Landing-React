import React from "react";
import { EncabezadoModal, ModalContainer, Overlay } from "./ModalStyles";
import { IconClose, TitleH2 } from "../Navbar/CartModal/CartModalStyles";
import { HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";

const ModalGral = ({ children, estado, cambioEstado }) => {
  const closeModalAlert = () => {
    cambioEstado(false);
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ModalContainer>
            <EncabezadoModal>
              <TitleH2>¡Atención!</TitleH2>
              <IconClose onClick={closeModalAlert}>
                <motion.div whileTap={{ scale: 1.15 }}>
                  <HiOutlineX />
                </motion.div>
              </IconClose>
            </EncabezadoModal>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default ModalGral;
