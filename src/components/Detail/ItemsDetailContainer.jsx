import React, {useState, useEffect}from 'react'
import { producto } from '../Mock/productos'
import ItemsDetail from '../Detail/ItemsDetail'
import { useParams } from 'react-router-dom'

export const ItemsDetailContainer = () => {
    const {id} = useParams()
    const getDatos = () => {
        return new Promise ((res) => {
            res(producto)
        })
    }
    const [datos, setDatos] = useState ([])
    useEffect(()=>{
        getDatos()
        .then(res => setDatos(res.find(prod => prod.id === Number(id))))
    },[])
  return (
    <div>
        <ItemsDetail dato = {datos}/>
    </div> 
  )
}
