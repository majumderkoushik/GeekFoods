import React from 'react'
import facebook from '../facebook.svg'
import instagram from '../instagram.svg'
import github from '../github.svg'
import twitter from '../twitter.svg'
import basket from '../basketball-solid.svg'



function Footer() {
  return (
    <>
        <footer className="bg-slate-200 w-full text-slate-600 flex flex-col items-center p-2">
      <div className="w-44 m-6">
        <img src="https://tse2.mm.bing.net/th?id=OIP.ca1wEtc1YPJQoNyjezumCgHaDt&pid=Api&P=0&h=180" />
      </div>
      <p className='m-4 w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
      <ul className="flex space-x-12 m-6">
                <li><a href="#" className="text-slate-600 hover:text-blue-300">About</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-300">Careers</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-300">History</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-300">Services</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-300">Project</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-300">Blog</a></li>
            </ul>
            <ul className="flex space-x-10 m-6">
                <li><a href="#"><img src={facebook} className='w-6' /></a></li>
                  <li><a href="#" ><img src={instagram} className='w-6' /></a></li>
                <li><a href="#"><img src={twitter} className='w-6' /></a></li>
                <li><a href="#"><img src={github} className='w-6' /></a></li>
                <li><a href="#"><img src={basket} className='w-6' /></a></li>
                 
            </ul>  
          
      </footer>
    </>
  )
}

export default Footer