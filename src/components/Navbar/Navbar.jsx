import React from "react";
import {
  ContainerLinkSesionUser,
  LinkSesionUser,
  LinksContainerStyled,
  MenuHamburguer,
  NavbarContainerStyled,
} from "./NavbarStyles";

import { motion } from "framer-motion";

import { BiUserCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <div>
        <a href="#">
          <img src="Logo.png" alt="Logo" />
        </a>
      </div>
      <LinksContainerStyled>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
      </LinksContainerStyled>
      <ContainerLinkSesionUser>
        <motion.div whileTap={{ scale: 0.95 }}>
          <LinkSesionUser underline>
            <a href="#">Registrarse</a>
          </LinkSesionUser>
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }}>
          <LinkSesionUser color>
            <a href="#">Iniciar Sesión</a>
            <BiUserCircle />
          </LinkSesionUser>
        </motion.div>
      </ContainerLinkSesionUser>

      <MenuHamburguer>
      <HiMenu />
      </MenuHamburguer>
    </NavbarContainerStyled>
  );
};

export default Navbar;
