import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../Context/CarritoContexts";

function CartWigdet() {
    const {totalCant} = useCarritoContext()
    return ( 
        <div className="CarWigdet" style={{fontSize: '2em', color: 'white', marginRight: '1em',display:"flex"}}>
            <Link to={"/Cart"}><FontAwesomeIcon icon={faCartShopping} /></Link>
            <span style={{color:"white", fontSize:"20px", top:"0"}}>{totalCant()}</span>        
        </div>
     );
}

export default CartWigdet;
