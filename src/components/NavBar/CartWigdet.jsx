import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartWigdet() {
    return ( 
        <div className="CarWigdet" style={{fontSize: '2em', color: 'white', marginRight: '1em'}}>
            <Link to={"/Cart"}><FontAwesomeIcon icon={faCartShopping} /></Link>
        
        </div>
     );
}

export default CartWigdet;
