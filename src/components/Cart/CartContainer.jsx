import React from "react";
import { Carrito } from "./Carrito";
import { useCarritoContext } from "../Context/CarritoContexts";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const CartContainer = () => {
  const { itemCart, totalCart } = useCarritoContext();
  const [vacio, setVacio] = useState(false);
  if (itemCart.length > 0) {
    return <>
    <div>
      <div style={{ display: "flex" }}>
        {itemCart.map((items) => (
          <Carrito key={items.id} items={items} />
        ))}
      </div>
      <div style={{ display: " flex", justifyContent: "flex-end" }}>
        <h3 style={{ marginRight: "1em" }}>Total: ${totalCart()}</h3>
        <Button variant="outline-success" size="lg">
          FINALIZAR COMPRA
        </Button>
      </div>
    </div>
  </>
  }

  return  (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"80vh", color:"#bbb"}}>
      <h3>Tu Carrito esta Vacio</h3>
    </div>)
 
};
