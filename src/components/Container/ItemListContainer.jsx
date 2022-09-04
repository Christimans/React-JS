import React, {useState, useEffect} from "react";
import { producto } from "../Mock/productos";
import ItemsList from "./ItemsList";

const getConsultar = () => {
    return new Promise ((res) => {
        res(producto)
   })
} 

export function ItemListContainer () {
    const [products, setProducts] = useState ([])

 useEffect(()=>{
    getConsultar()
    .then (data => setProducts(data))
    .catch(Error =>
        console.error(Error))
 },[])



    return ( 
        <div className="ItemListContainer">
            <ItemsList products = {products}/>
        </div>

     );
}

