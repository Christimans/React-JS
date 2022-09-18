import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


function ItemCount({stock, onClick}) {
  const [count, setCount] = useState(1);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="col-5" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <InputGroup className="">
        <InputGroup.Text id="basic-addon2" >Cantidad:</InputGroup.Text>
        <Form.Control readOnly value={count}/>
        <Button className="btn" variant="info" onClick={sumar}> {" "}+{" "}</Button>
        <Button className="btn" variant="info" onClick={restar}>{" "}-{" "}</Button>
        <Button variant="warning" className="btn" onClick={() => onClick(count)} > Agregar al carrito</Button>
        </InputGroup>
        
    </div>
  );
}

export default ItemCount;
