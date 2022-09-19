import React, {createContext, useContext, useState} from "react";

export const CarritoContext = createContext([])

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = ({children}) => {
    const [itemCart, setItemCart] = useState([])

    console.log('ItemCart ::>', itemCart)

    const addCarrito = (item, cantidad) => {
        if (isInCart (item.id)) {
            setItemCart (itemCart.map(prod => prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod))          
        }else{
            setItemCart([...itemCart, {...item, cantidad: cantidad}])
            console.log(itemCart)
        }
    }
    const itemRemove = (item) => {
        setItemCart (itemCart.filter((prod) => prod.id !== item ))        
    }

    const clear = () => setItemCart([])
    const isInCart = (id) => itemCart.find(prod => prod.id === id) ? true : false

    const totalCart = () => itemCart.reduce((total, prod) => total + prod.precio * prod.cantidad, 0)

    const totalCant = () => itemCart.reduce((cant, prod) => cant + prod.cantidad, 0)
    
    console.log(itemCart.cantidad)
    
    return (<CarritoContext.Provider value = {{itemCart, addCarrito, clear, isInCart, itemRemove, totalCart, totalCant}}>{children}</CarritoContext.Provider>)

    
}


