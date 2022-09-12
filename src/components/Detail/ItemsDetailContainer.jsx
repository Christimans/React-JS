import React, { useState, useEffect } from "react";
import { producto } from "../Mock/productos";
import ItemsDetail from "../Detail/ItemsDetail";
import { useParams } from "react-router-dom";
import { Spinners } from "../Spinners/Spinners";

export const ItemsDetailContainer = () => {
  const { id } = useParams();

  const [datos, setDatos] = useState();

  useEffect(() => {
    const getDatos = new Promise((res) =>
      setTimeout(
        () => res(producto.find((producto) => producto.id === Number(id))),
        2000
      )
    );
    getDatos.then((res) => setDatos(res));
  }, []);

  return datos ? (
    <div>
      <ItemsDetail dato={datos} />
    </div>
  ) : (
    <Spinners/>
  );
};
