import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import React from "react";
import { useState } from "react";
import { useCarritoContext } from "../Context/CarritoContexts";


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
  const generarOrden = async (data) => {
    try {
      const col = collection(db, "ComprobantedeCompra");
      const orden = await addDoc(col, data);
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
    clear();
  };

  return !comprobanteid ? (
    <div style={{}}>
      <h2>Finalizar Compra</h2>
      <hr />
      <h3>Completa los siguientes datos</h3>
      <form onSubmit={haldleSubmit}>
        <input
          name="Nombre"
          type="text"
          value={Nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        /><br/>
        <input
          name="Email"
          type="text"
          value={Email}
          onChange={handleInputChange}
          placeholder="Email"
        /><br/>
        <input
          name="Telefono"
          type="number"
          value={Telefono}
          onChange={handleInputChange}
          placeholder="Telefono"
        /><br/>
        <button className="btn btn-danger" type="submit">
          Enviar
        </button>
      </form>
    </div>
  ) : (
    <h3> Su comprobante de compra es : {comprobanteid}</h3>
  );
};
