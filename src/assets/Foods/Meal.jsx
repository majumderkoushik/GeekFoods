import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

const Meal = () => {
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data.meals);
        setItem(response.data.meals);
        setShow(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setShow(true); 
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <div className='main'>
        <div className='heading'>
          <h1> Search Your Food Recipe</h1>
        </div>
        <div className='searchBox'>
          <input type='search' className='search-bar rp' placeholder='Search Your Food.....' onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
        </div>
        <div className='container'>
          {
            show ? <MealItem data={item} /> : "Not Found"
          }
        </div>
        <div className='indexContainer'>
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};

export default Meal;
