import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { Bubble, LinkCart } from "../NavbarStyles";

const CartIcon = ({ onClick, cantidadTotal }) => {
  return (
    <LinkCart onClick={onClick}>
      <FaShoppingCart />
      <Bubble>{cantidadTotal}</Bubble>
    </LinkCart>
  );
};

export default CartIcon;
