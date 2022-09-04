import React, {useState, useEffect}from 'react'
import { producto } from '../Mock/productos'
import ItemsDetail from '../Detail/ItemsDetail'

export const ItemsDetailContainer = () => {
    const getDatos = () => {
        return new Promise ((res) => {
            res(producto)
        })
    }
    const [datos, setDatos] = useState ([])
    useEffect(()=>{
        getDatos()
        .then(res => setDatos(res.find(prod => prod.id ===1)))
    },[])
  return (
    <div>
        <ItemsDetail dato = {datos}/>
    </div> 
  )
}
