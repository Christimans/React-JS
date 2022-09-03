import React, {useState, useEffect} from "react";
import { producto } from "../Mock/productos";
import ItemsList from "./ItemsList";

const getConsultar = (confirmar) => {
    return new Promise ((res, rej) => {
       if (confirmar) {
           res(producto)            
       }else{
           rej("incorrecto")
       }
   })
} 

export function ItemListContainer () {
    const [products, setProducts] = useState ([])

 useEffect(()=>{
    getConsultar(true)
    .then (data => setProducts(data))
 },[])



    return ( 
        <div className="ItemListContainer">
            <ItemsList products = {products}/>
        </div>

     );
}

