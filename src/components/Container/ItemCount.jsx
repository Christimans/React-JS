import { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function ItemCount ({stock, onAdd}) {
    const [count, setCount] = useState(1)

    function sumar () {
        if (count < stock){
            setCount (count + 1)
        }
        
    }
    function restar () {
        if (count > 1){
            setCount (count - 1)
        }
    }
    function restablecer () {
        setCount (0)
    }
  return (
    
    <div>
        <Card className="text-center" border="danger" style={{width:'18rem'}}>
            <Card.Body >
                <Card.Header>Contador</Card.Header>

                <Card.Text>Stock: {stock}</Card.Text>

                <Card.Text>Cantidad: {count}</Card.Text>

                <ButtonGroup>
                <Button className="btn" variant="danger" onClick={restar}> - </Button>
                <Button className="btn" variant="info" onClick={restablecer}> restablecer </Button>
                <Button className="btn" variant="success" onClick={sumar}> + </Button>
                </ButtonGroup>
                
                <Button variant="warning" className="btn" onClick={() => onAdd(count)}>Confirmar</Button>
            </Card.Body>
        </Card>   
        
    </div>
  )
}

export default ItemCount;
