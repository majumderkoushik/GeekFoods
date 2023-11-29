import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'

function NavBar() {
  return (
    <>
         <nav className="mx-auto bg-blue-950 sticky top-0 z-20">
       <div className="flex justify-evenly items-center">
       <div className="text-white font-bold text-2xl flex items-center space-x-4 p-4">
                <a href="#"><img src='https://flowbite.com/docs/images/logo.svg' /></a>
                <h1>GeekFoods</h1>
      </div>
      <ul className="flex space-x-4">
                <li><NavLink to="/" className="text-white">Home</NavLink></li>
                <li><NavLink to="/quotes" className="text-white">Quotes</NavLink></li>
                <li><NavLink to="/resturant" className="text-white hover:text-blue-300">Resturants</NavLink></li>
                <li><NavLink to="/food" className="text-white hover:text-blue-300">Food</NavLink></li>
                <li><NavLink to="./contacts" className="text-white hover:text-blue-300">Contacts</NavLink></li>
            </ul>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Get started</button>
       </div>
       </nav>
    </>
  )
}

export default NavBar