import React, {createContext, useContext, useState} from "react";

export const CarritoContext = createContext([])

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = ({children}) => {
    const [itemCart, setItemCart] = useState([])

    const addCarrito = (item, cantidad) => {
        if (isInCart (item.id)) {
            setItemCart (itemCart.map(prod => prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod))          
        }else{
            setItemCart([...itemCart, {...item, cantidad: cantidad}])
        }
    }
    const itemRemove = (item) => {
        setItemCart (itemCart.filter((prod) => prod.id !== item ))        
    }

    const clear = () => setItemCart([])
    const isInCart = (id) => itemCart.find(prod => prod.id === id) ? true : false
    
    return (<CarritoContext.Provider value = {{itemCart, addCarrito, clear, isInCart, itemRemove}}>{children}</CarritoContext.Provider>)
}


