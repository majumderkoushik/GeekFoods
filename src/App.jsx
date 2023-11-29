import { useState } from 'react'
import {Route,Routes,NavLink} from 'react-router-dom'
import './App.css'
import Home from './assets/Home/Home'
import Quotes from './assets/Quotes/Quotes'
import NavBar from './assets/NavBar/NavBar'
import Footer from './assets/Footer/Footer'
import Resturant from './assets/Resturant/Resturant'
import Foods from './assets/Foods/Foods'
import RecipeInfo from './assets/Foods/RecipeInfo'
import Contacts from './assets/NavBar/Contacts/Contacts'



function App() {
 

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/resturant' element={<Resturant />} />
        <Route path='/food' element ={<Foods />} />
        <Route path='/contacts' element={<Contacts />} />
        
    <Route path='/food/:MealId' element={<RecipeInfo />} />
   
   
        
     </Routes>
    
   
      
    </>
  )
}

export default App