import {
  ContainerSesionUser,
  ContainerMenuCart,
  LinkLogo,
  LinkSesionUser,
  LinksContainerStyled,
  MenuHamburguer,
  MenuItem,
  NavbarContainerStyled,
  MainLinkg,
} from "./NavbarStyles";

import { motion } from "framer-motion";
import { useContext, useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavbarContext } from "./NavbarContext";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon/CarIcon";
import CartModal from "./CartModal/CartModal.jsx";

import { useSelector } from "react-redux";
import { selectCarrito } from "./CartModal/CarritoSlice";

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useContext(NavbarContext);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  const { cantidadTotal } = useSelector(selectCarrito);

  return (
    <NavbarContainerStyled>
      <MainLinkg>
        <LinkLogo>
          <Link to="/">
            <img src="Logo.png" alt="Logo" height="65"/>
          </Link>
        </LinkLogo>
        <LinksContainerStyled isMenuOpen={isMenuOpen}>
          <MenuItem onClick={toggleMenu}>
            <Link to="/Inicio">Inicio</Link>
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

        <ContainerMenuCart>
          <motion.div whileTap={{ scale: 1.1 }}>
            <CartIcon onClick={handleCartClick} cantidadTotal={cantidadTotal} />
          </motion.div>
          {isCartOpen && <CartModal onClose={() => setCartOpen(false)} />}

          <ContainerSesionUser>
            <motion.div whileTap={{ scale: 0.95 }}>
              <LinkSesionUser color>
                <a href="#">Iniciar Sesión</a>
                <BiUserCircle />
              </LinkSesionUser>
            </motion.div>
          </ContainerSesionUser>

          <MenuHamburguer onClick={toggleMenu}>
            <motion.div whileTap={{ scale: 1.25 }}>
              {isMenuOpen ? <HiOutlineX /> : <HiMenu />}
            </motion.div>
          </MenuHamburguer>
        </ContainerMenuCart>
      </MainLinkg>
    </NavbarContainerStyled>
  );
};

export default Navbar;
