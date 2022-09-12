import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { producto } from "../Mock/productos";
import { Spinners } from "../Spinners/Spinners";
import ItemsList from "./ItemsList";



export function ItemListContainer () {
    const {category} = useParams()

 

    const [products, setProducts] = useState ()

 useEffect(()=>{
    const getConsultar = new Promise ((res) => { setTimeout(() => {
            if(category){
                res(producto.filter ((prod) => prod.category === category ))
            }else{
                res(producto)
            }
        }, 2000);
       })
    getConsultar
    .then ((res) => setProducts(res))
    .catch(Error =>
        console.error(Error))
 },[category])



    return products ?
        <div className="ItemListContainer">
            <ItemsList products = {products}/>
        </div>
        :
        <Spinners/>
     ;
}

