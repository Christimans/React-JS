import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Items({ nombre, indice, image, precio, stock }) {
  return (
    <>
      <Card className="text-center" style={{ width: '18rem', margin: '1em'}} key={indice}>
        <Card.Header>{nombre}</Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={image}/>
          <Card.Text>${precio}</Card.Text>
          <Button variant="primary">Mas info</Button>
        </Card.Body>
        <Card.Footer>Stock Disponible {stock}</Card.Footer>
      </Card>
    </>
  );
}
export default Items;
