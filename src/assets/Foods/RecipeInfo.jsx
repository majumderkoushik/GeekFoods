import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeInfo = () => {
  const[item,setItem]=useState();
    const {MealId} =useParams();
    if(MealId!="") {
      fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then(res =>res.json())
      .then(data =>{
        setItem(data.meals[0]);
      })
    }
  return (
    <>
    {
      (!item)?"":(<>
      <div className='flex  bg-yellow-500'>
        <div className='content flex p-10 flex-col w-1/2'>
          <img src={item.strMealThumb} alt="" className='bg-cover bg-center h-screen c' />
          <div>
            <h1 className='text-4xl font-400'>{item.strMeal}</h1>
            <h2 className='text-xl from-neutral-200'>{item.strArea} Food</h2>
            <h3>{item.strCategory}</h3>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='p-20'>
            <h2 className='text-5xl p-3 from-neutral-400'>Ingredients</h2>
            <h4 className='text-2xl'>{item.strIngredient1}: {item.strMeasure1}</h4>
            <h4 className='text-2xl'>{item.strIngredient2}: {item.strMeasure2}</h4>
            <h4 className='text-2xl'>{item.strIngredient3}: {item.strMeasure3}</h4>
            <h4 className='text-2xl'>{item.strIngredient4}: {item.strMeasure4}</h4>
            <h4 className='text-2xl'>{item.strIngredient5}: {item.strMeasure5}</h4>
            <h4 className='text-2xl'>{item.strIngredient6}: {item.strMeasure6}</h4>
            <h4 className='text-2xl'>{item.strIngredient7}: {item.strMeasure8}</h4>
           </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center  w-full bg-yellow-500 shadow-sm p-6 mb-6 rounded-md'>
         <h2 className='text-7xl font-600 p-3'>INSTRUCTIONS</h2>
         <h4 className='inst font-400 my-6 '>{item.strInstructions}</h4>
          </div>
      </>)
    }
   
    </>
  )
}

export default RecipeInfo