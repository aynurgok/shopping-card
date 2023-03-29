import React from 'react'
import {BsBasket3Fill} from 'react-icons/bs'
function ProductItem({product, card ,setCard}) {
  function addToCard(product) {
    setCard([...card, product])

  }
  return (
    <div className="flex-col px-2 py-2">
      <div  className="flex justify-center ">
        <img src={product.image} alt="placeholder" className="rounded-xl" />
      </div>
      <div className='mt-1 px-2 py-5 flex items-center justify-between'>
        <div className="mt-1 flex-col px-5 py-5  ">
          <p className="font-semibold text-color">{product.name}</p>
          <p className="font-bold text-color">${product.price}</p>
        </div>
        <div className='w-20 border rounded-xs '>
        <BsBasket3Fill onClick={() =>addToCard(product)} className='text-3xl  basket-color  p-1 '/>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
