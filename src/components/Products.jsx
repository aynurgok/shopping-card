import React from "react"
import ProductItem from "./ProductItem"
import productData from "../ProductsData"

function Products(props) {
 
  return (
    <div className=" grid grid-cols-3 border gap-5 px-3.5 ">
       {
        productData.map(product =>(
          <ProductItem key={product.id} product={product} card={props.card} setCard={props.setCard}  />
        ))
       }
    </div>
  )
}

export default Products
