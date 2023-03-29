import React,{useState} from 'react'
import Basket from './components/Basket'
import Header from './components/Header'
import Products from './components/Products'

function App() {
  const [card, setCard] = useState([])
 
  const EmtyBasket = () => {
    if(confirm("Sepetiniz boşaltılıyor emin misiniz?")) {
      setCard([])
    }else {
      return
    }
  }
  return (
    <div className='container mx-auto mt-10 pb-20 pt-5 rounded-md app '>
      <Header card={card} EmtyBasket={EmtyBasket} />
      <Products card={card} setCard={setCard} />
      <Basket card={card} EmtyBasket={EmtyBasket}/>
    </div>
  )
}

export default App
