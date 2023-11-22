import {
  ContainerLinkSesionUser,
  LinkSesionUser,
  LinksContainerStyled,
  MenuHamburguer,
  MenuItem,
  NavbarContainerStyled,
} from "./NavbarStyles";

import { motion } from "framer-motion";
import { useContext } from "react";

import { BiUserCircle } from "react-icons/bi";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavbarContext } from "./NavbarContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useContext(NavbarContext);

  return (
    <NavbarContainerStyled>
      <div>
        <Link to="/">
          <img src="Logo.png" alt="Logo" />
        </Link>
      </div>
      <LinksContainerStyled isMenuOpen={isMenuOpen}>
        <MenuItem onClick={toggleMenu}>
          <Link to="/Home">Inicio</Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link to="/Nosotros">Nosotros</Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link to="/Productos">Productos</Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link to="/Contacto">Contacto</Link>
        </MenuItem>
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

      <MenuHamburguer onClick={toggleMenu}>
        <motion.div whileTap={{ scale: 1.25 }}>
          {isMenuOpen ? <HiOutlineX /> : <HiMenu />}
        </motion.div>
      </MenuHamburguer>
    </NavbarContainerStyled>
  );
};

export default Navbar;
