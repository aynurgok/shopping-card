import {AiOutlineShoppingCart} from 'react-icons/ai'
import Basket from './Basket'
import { useState } from 'react'

function CardIcon({card }) {
  const [showBasket, setShowBasket] = useState(false);

  const handleClick = () => {
    setShowBasket(!showBasket);
  }

  return (
    <div className='p-2 relative  '> 
      <AiOutlineShoppingCart onClick={handleClick} className='text-3xl  border rounded-full my-custom-style cursor-pointer  p-1' /> 
      <span className='bg-black text-white flex w-3 h-3 p-2  justify-center items-center text-xs rounded-full absolute top-8 right-0.5'>{card.length}</span>
      {showBasket && <Basket card={card} />}
    </div>
  )
}

export default CardIcon
