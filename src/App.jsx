import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Content from './components/content'
import data from '../src/assets/Assets/data'
import Cards from './components/Cards'
import Page from './components/page'

function App() {

  let t = data;
  console.log(t);
  const [count, setCount] = useState(0)

  return (
    <>
    
   <Navbar />
   <Page name={data[0].name} src={data[0].image} category='women' price={data[0].new_price}   />
   <Content/>

   <h2 className='mx-20 pb-10' >Showing 12</h2>
   <div className='grid grid-cols-3  gap-4  content-evenly w-screen'>
    {t.map((e)=>{
      
      return <Cards key={e.id} name={e.name} src={e.image} newPrice={e.new_price}/>
    })}
</div>
     
    </>
  )
}

export default App
