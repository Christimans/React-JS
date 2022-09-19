import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCarritoContext } from "../Context/CarritoContexts";

export const Carrito = ({ items }) => {
  const { itemRemove } = useCarritoContext();
  
  return (
    <div style={{display:"flex"}}>
      <Card className="text-center" style={{width: "12rem", margin: "1em" }}>
        <Card.Header>{items.nombre}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={items.image} />
        </Card.Body>
        <Card.Footer style={{ fontWeight: "bold", fontSize: "17px" }}>
          ${items.precio}
        </Card.Footer>
        <Card.Footer>
        <span style={{fontWeight:"bold"}}>Cant.: {items.cantidad}</span>
        </Card.Footer>
        <Button
          variant="danger"
          className="btn"
          onClick={() => itemRemove(items.id)}
        >
          Quitar
        </Button>
      </Card>
    </div>
  );
  
};
