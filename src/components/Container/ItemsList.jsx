import Items from "./Items"



const ItemsList = ({products}) => { 
  
  return (
    
    <div className='ItemsList row'>
      {products.map((products, indice) => {
        return <Items key={indice} nombre={products.nombre} precio={products.precio} image={products.image} stock={products.stock}/>
      })}
    </div>

  )
}




export default ItemsList;
