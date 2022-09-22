/* import { async } from "@firebase/util"; */
import { collection, getDocs, query, where } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {db} from "../../Firebase/Firebase"
import { Spinners } from "../Spinners/Spinners";
import ItemsList from "./ItemsList";



export function ItemListContainer () {
    const {category} = useParams()

    const [products, setProducts] = useState ()
    const [cargando, setCargando] = useState(false)

    const getdata = async (categoria) => {
        try{
            const document = categoria ? query(collection(db,"items"), where("categoria", "==", categoria) ) : collection(db, "items")
            const col = await getDocs(document)
            const resultado = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()})
            setProducts(resultado)
            setCargando(true)
        }catch (error){
            console.error(error)
        }
    }
    
    useEffect (() => {
        getdata(category)
    },[category])

    return cargando ?
        <div className="ItemListContainer">
            <ItemsList products = {products}/>
        </div>
        :
        <Spinners/>
     ;
}

