import React from 'react'


import NavBar from '../NavBar/NavBar'
import Meal from './Meal'
import Footer from '../Footer/Footer'
import MealItem from './MealItem'


function Foods() {
  return (
    <>
    <div className=' bg-indigo-400 p-5'>
    <Meal />  
    <MealItem />   
    </div>
    <Footer />
    
        
    </>
  )
}

export default Foods