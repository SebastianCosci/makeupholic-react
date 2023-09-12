import React from 'react';
import { Link } from 'react-router-dom';
import CarritoCompras from "../img/carritocompras.png";

function CartWidget({ cartItems }) {
  return (
    <div className="cart-container">
      <Link to="/cart">
        <div className="cart">
          <img className="cart-logo" src={CarritoCompras} alt="carrito-de-compras" width={50} height={50} />
          {cartItems > 0 && <span className="item__total">{cartItems}</span>}
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
