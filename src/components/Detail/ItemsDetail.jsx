import ItemCount from "../Container/ItemCount";
import "./Detail.css";
import React, {useState} from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import {useCarritoContext} from "../Context/CarritoContexts"
import { Link } from "react-router-dom";

function ItemsDetail({ dato }) {
  const [addButtom, setAddButtom] = useState(false);

  const {addCarrito} = useCarritoContext ()

  const onAdd = (cantidad) => {
    setAddButtom(true);
    addCarrito(dato, cantidad)
    let stockResta = dato.stock - cantidad;
    dato.stock = stockResta;
  };

  return (
    <Card className="card-detail">
      <ListGroup className="list-group-flush">
        <Card.Img src={dato.image} style={{ margin: "1em" }} />
        <ListGroup.Item
          style={{
            display: "flex",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          Stock Disponible {dato.stock}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title>{dato.nombre}</Card.Title>
        <Card.Text style={{ margin: "1em" }}>{dato.description}</Card.Text>
        <Card.Text
          style={{ margin: "1em", fontWeight: "bold", fontSize: "20px" }}
        >
          $ {dato.precio}
        </Card.Text>
        <div>
        {addButtom 
        ? (<Link to={"/Cart"}><Button variant="danger" size="lg" style={{display:"flex", margin:"0 auto"}}>Compra</Button></Link>) 
        : (<ItemCount stock={dato.stock} onClick={onAdd} />) }
          </div>
      </Card.Body>
    </Card>
  );
}

export default ItemsDetail;
