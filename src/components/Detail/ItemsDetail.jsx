import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../Container/ItemCount";
import "./Detail.css";

function ItemsDetail({ dato }) {
  return (
    <Card className="card-detail">
      <ListGroup className="list-group-flush">
        <Card.Img src={dato.image} style={{margin:'1em'}} />
        <ListGroup.Item style={{display:'flex', fontWeight:"bold", justifyContent:'center'}}>Stock Disponible {dato.stock}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title>{dato.nombre}</Card.Title>
        <Card.Text style={{margin:'1em'}}>{dato.description}</Card.Text>
        <Card.Text style={{margin:'1em', fontWeight:"bold", fontSize:'20px'}}>$ {dato.precio}</Card.Text>
        <ItemCount stock={dato.stock}/>
      </Card.Body>
      
    </Card>
    
  );
}

export default ItemsDetail;
