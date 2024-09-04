import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleFood = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Access the state passed from navigation
  const food = state?.food; // Safely access food data

  // Function to navigate to meal details page
  const getFoodProduct = (idMeal) => {
    navigate(`/mealdetails/${idMeal}`);
  };

  return (
    <div className="container">
    <h5 className="p-4">Search Results</h5>
    {food && food.meals ? (
      <div className="row">
        {food.meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-center justify-content-center"
            style={{ textAlign: 'center' }}
          >
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: '10px' }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="img-fluid"
                style={{ maxWidth: '150px', maxHeight: '150px' }}
              />
              <div>
                <h3 style={{ color: 'Brown', margin: '0' }}>
                  <b><i>{meal.strMeal}</i></b>
                </h3>
                <p style={{ color: 'burlywood', margin: '0' }}>
                  <b>{meal.strCategory}</b>
                </p>
                <button
                  onClick={() => getFoodProduct(meal.idMeal)}
                  className="btn btn-primary mt-2"
                  style={{ cursor: 'pointer' }}
                >
                  Get Details of {meal.strMeal}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No results found.</p>
    )}
  </div>
  );
};

export default SingleFood;
