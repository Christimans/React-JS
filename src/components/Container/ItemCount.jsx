import { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


function ItemCount ({stock, onAdd}) {
    const [count, setCount] = useState(0)

    function sumar () {
        if (count < stock){
            setCount (count + 1)
        }
        
    }
    function restar () {
        if (count > 0){
            setCount (count - 1)
        }
    }
    function restablecer () {
        setCount (0)
    }
  return (
    
    <div>
        <Card className="text-center" style={{width:'18rem', marginRight: '1em'}}>
        <Card.Text style={{fontWeight:"bold"}}>Cantidad: {count}</Card.Text>
                <ButtonGroup>
                <Button className="btn" variant="info" onClick={restar}> - </Button>
                <Button className="btn" variant="primary" onClick={restablecer}>Cancelar</Button>
                <Button className="btn" variant="info" onClick={sumar}> + </Button>
                </ButtonGroup>
                <Button variant="warning" className="btn" onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </Card>   
        
    </div>
  )
}

export default ItemCount;
