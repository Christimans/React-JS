import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Items({ nombre, image, precio, stock }) {
  return (
    <>
      <Card className="text-center" style={{ width: '18rem', margin: '1em'}}>
        <Card.Header>{nombre}</Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={image}/>
        </Card.Body>
        <Button variant="primary">Mas info</Button>
        <Card.Footer style={{fontWeight:"bold", fontSize:'17px'}}>${precio}</Card.Footer>
      </Card>
    </>
  );
}
export default Items;
