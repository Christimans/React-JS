import React from "react";
import { Carrito } from "./Carrito";
import { useCarritoContext } from "../Context/CarritoContexts";
import { Button } from "react-bootstrap";


export const CartContainer = () => {
  
    const {itemCart, totalCart} = useCarritoContext ()
  return (
    <div>
      <div style={{display:"flex"}}>
      {itemCart.map((items) => <Carrito key={items.id} items = {items}/>)}
      </div>
      <div style={{display:" flex", justifyContent:"flex-end"}}>
        <h3 style={{marginRight:"1em"}}>Total: ${totalCart()}</h3>
        <Button variant="outline-success" size="lg">
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  );
};
