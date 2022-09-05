import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { producto } from "../Mock/productos";
import ItemsList from "./ItemsList";



export function ItemListContainer () {
    const {category} = useParams()

    const getConsultar = () => {
        return new Promise ((res) => {
            if(category){
                res(producto.filter ((prod) => prod.category === category ))
            }else{
                res(producto)
            }
            
       })
    } 

    const [products, setProducts] = useState ([])

 useEffect(()=>{
    getConsultar()
    .then (data => setProducts(data))
    .catch(Error =>
        console.error(Error))
 },[category])



    return ( 
        <div className="ItemListContainer">
            <ItemsList products = {products}/>
        </div>

     );
}

