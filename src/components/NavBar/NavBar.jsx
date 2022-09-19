import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../Context/CarritoContexts";
import CartWigdet from "./CartWigdet";

function NavBar() {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            Compras.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to={'/'}>
                  Incio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Producto
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to={'/category/monitor'}>
                    Monitor
                  </Link>
                  <Link className="dropdown-item" to={'/category/componentes'}>
                    Componentes
                  </Link>
                </div>
              </li>
            </ul>
            <CartWigdet />
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
