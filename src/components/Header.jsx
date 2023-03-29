import React from 'react'
import CardIcon from './CardIcon'


function Header({card}) {
 
  return (
    <div className=' px-10 flex justify-between text-color '>
      <h1 className='text-2xl border font-semibold'>React Shopping Cards</h1>
      <CardIcon card={card}   />
    </div>
  )
}

export default Header