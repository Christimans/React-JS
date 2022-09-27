import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCarritoContext } from "../Context/CarritoContexts";
import { clear } from "@testing-library/user-event/dist/clear";

export const Checkout = () => {
  const [comprobanteid, setComprobanteid] = useState();

  const { itemCart, totalCart, clear } = useCarritoContext();

  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });

  const { Nombre, Email, Telefono } = buyer;

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  const generarOrden = async (comprobante) => {
    try {
      const col = collection(db, "ComprobantedeCompra");
      const orden = await addDoc(col, comprobante);
      console.log(orden);
      setComprobanteid(orden.id);
    } catch (error) {
      console.error(error);
    }
  };

  const haldleSubmit = (e) => {
    e.preventDefault();
    const items = itemCart.map((e) => {
      return {
        id: e.id,
        nombre: e.nombre,
        precio: e.precio,
        cantidad: e.cantidad,
      };
    });
    const dia = new Date();
    const pagototal = totalCart();
    const comprobante = { buyer, items, dia, pagototal };
    generarOrden(comprobante);
    console.log(comprobante);
    clear()
  };

  return !comprobanteid ? (
    <div>
      <h2>Finalizar Compra</h2>
      <hr />
      <h3>Completa los siguientes datos</h3>
      <Form onSubmit={haldleSubmit}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          value={Nombre}
          onChange={handleInputChange}
        >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          value={Email}
          onChange={handleInputChange}
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          value={Telefono}
          onChange={handleInputChange}
        >
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Telefono" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  ) : (
    <h3> Su comprobante de compra es : {comprobanteid}</h3>
  );
};
