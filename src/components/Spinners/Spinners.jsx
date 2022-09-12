import React from "react";
import { Spinner } from "react-bootstrap";
import "./style.css";

export const Spinners = () => {
  return (
    <div className="spinner">
      <h2>Cargando</h2>
      <Spinner size="sm" variant="info" animation="grow" />
      <Spinner size="sm" variant="info" animation="grow" />
      <Spinner size="sm" variant="info" animation="grow" />
    </div>
  );
};
