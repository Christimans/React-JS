import Items from "./Items"



const ItemsList = ({products}) => { 
  
  return (
    
    <div className='ItemsList row'>
      {products.map((products, id) => {
        return <Items key={id} nombre={products.nombre} precio={products.precio} image={products.image} stock={products.stock} id={products.id}/>
      })}
    </div>

  )
}




export default ItemsList;
