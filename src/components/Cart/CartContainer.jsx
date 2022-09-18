import React from "react";
import { Carrito } from "./Carrito";
import { useCarritoContext } from "../Context/CarritoContexts";
import { Button } from "react-bootstrap";


export const CartContainer = () => {
    const {itemCart} = useCarritoContext ()
  return (
    <div style={{display:"flex"}}>
      {itemCart.map((items) => <Carrito key={items.id} items = {items}/>)}
    </div>
  );
};
