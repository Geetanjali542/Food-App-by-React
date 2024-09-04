import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RandomMeal = () => {
  const [random, setRandom] = useState(null); // Initialize as null

  const getFood = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      console.log(response.data);
      setRandom(response.data.meals[0]); // Set the first meal object
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className="container-fluid  ">
      <h5>Refresh everytime to discover a new dish </h5>
      {random ? (
        <div className="card p-3 mx-auto my-2 bg-danger-subtle" style={{ maxWidth: '100%' }}>
          <h1 className="text-center pt-3  text-dark pb-3">Random Meal</h1>
          <img
            className="card-img-top mx-auto d-block bg-outline-danger"
            src={random.strMealThumb}
            alt={random.strMeal}
            style={{ maxWidth: '150px', height: '150px', objectFit: 'contain' }}
          />
          <div className="card-body">
            <h5 className="card-title">Title: {random.strMeal}</h5>
            <p className="card-text">
              <b>Description:</b> {random.strInstructions}
            </p>
            <h5 className="card-title">
              <b>Category:</b> {random.strCategory}
            </h5>
            <p className="card-text">
              <b>Area:</b> {random.strArea}
            </p>
            <p className="card-text">
              <b>Tags:</b> {random.strTags}
            </p>
            <p className="card-text">
              <b>Source:</b> <a href={random.strSource} target="_blank" rel="noopener noreferrer">Recipe Source</a>
            </p>
            <p className="card-text">
              <b>Video:</b> <a href={random.strYoutube} target="_blank" rel="noopener noreferrer">Watch Video</a>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomMeal;
