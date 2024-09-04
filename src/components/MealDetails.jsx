import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const [mealData, setMealData] = useState(null); // Initialize as null
  const { idMeal } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      console.log(response.data);
      setMealData(response.data.meals[0]); // Set the first meal object from the response
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [idMeal]); // Add idMeal as a dependency

  if (!mealData) {
    return <p>Loading...</p>; // Display a loading state if data isn't loaded yet
  }

  return (
    <div className="card p-3 m-5 bg-info-subtle" style={{ width: "65rem" }}>
      <h1 className='text-center pt-3 bg-black text-light pb-3'>Product Details</h1>
      <img
        className="card-img-top bg-outline-danger"
        src={mealData.strMealThumb}
        alt={mealData.strMeal}
        style={{ width: "150px", height: "150px", objectFit: 'contain' }}
      />

      <div className="card-body">
        <h5 className="card-title">Title: {mealData.strMeal}</h5>
        <p className="card-text">
          <b>Description:</b> {mealData.strInstructions}
        </p>
        <h5 className="card-title">
          <b>Category:</b> {mealData.strCategory}
        </h5>
        <p className="card-text">
          <b>Area:</b> {mealData.strArea}
        </p>
        <p className="card-text">
          <b>Tags:</b> {mealData.strTags}
        </p>
        <p className="card-text">
          <b>Source:</b> <a href={mealData.strSource} target="_blank" rel="noopener noreferrer">Recipe Source</a>
        </p>
        <p className="card-text">
          <b>Video:</b> <a href={mealData.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
        </p>
      </div>
    </div>
  );
};

export default MealDetails;
