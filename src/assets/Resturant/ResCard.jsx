import React from "react";
import { FaStar, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';

const ResCard = ({ restaurantData }) => {
    return (
      <div className="max-w-md mx-auto rounded-lg overflow-hidden boxeee bg-white">
         <div className="px-6 py-4">
          <div className="flex items-center mb-2">
            <h2 className="text-gray-800 font-semibold text-xl">{restaurantData.name}</h2>
            <div className="ml-2 flex">
              {[...Array(6)].map((_, index) => (
                <FaStar key={index} className={`w-5 h-5 ${index < restaurantData.rating ? 'text-green-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2"><FaMapMarkerAlt className="inline mr-1" /> {restaurantData.address}, {restaurantData["address line 2"]}</p>
          <p className="text-gray-600 text-sm mb-4">{restaurantData.outcode} {restaurantData.postcode}</p>
        </div>
  
       
        <div className="px-6 py-4 bg-gray-100">
          <div className="mb-2 text-green-500">
            <FaUtensils className="inline mr-1" />
            {restaurantData.type_of_food}
          </div>
          <a href={restaurantData.URL} className="text-yellow-500 hover:underline" target="_blank" rel="noopener noreferrer">Visit Menu</a>
        </div>
      </div>
    );
  };
  export default ResCard;