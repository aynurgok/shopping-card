import React, {useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Basket({card, EmtyBasket}) {
  const [deleteItem, setDeleteItem] = useState([])

  const total = card.reduce((acc, item) => acc + item.price, 0 )
  if(card.length===0) return

  const handleDelete = (id) => {
    const itemIndex = card.findIndex(item => item.id === id);
    const itemToDelete = card[itemIndex];
  
    setDeleteItem([...deleteItem, itemToDelete]);
    card.splice(itemIndex, 1);
  };


  return (
    <div className="border fixed bg-white rounded-md border-indigo-400 mt-2 w-52 h-100 px-6 items-center flex-col justify-center ">
      <h1 className="text-2xl font-semibold">Sepet</h1>
      <ul className="my-5">
      {card.map((item) => (
          <li key={item.id} className="mt-2 flex justify-between">
            <span>{item.name}</span>
            <span>${item.price} </span>
            <AiFillDelete onClick={() => handleDelete(item.id)} className='cursor-pointer pt-1 text-xl'/>
          </li>
        ))}
      </ul>
      <hr className="my-1" />
      <p className="text-xl font-semibold">Toplam: ${total}</p>
      <button onClick={EmtyBasket} className="bg-red-500 w-full h-6 p-4 flex items-center rounded-md mt-3 text-white">Sepeti Boşalt</button>
    </div>
  )
}

export default Basket
