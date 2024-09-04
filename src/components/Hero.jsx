import React from 'react';
import imageForBackground from '../images/foods.jpg'; // Ensure the correct file extension

import Footer from './Footer';
import ImagePage from './ImagePage';
import Category from './Category';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  const getMeals = ()=> {
    navigate(`randommeal`)
  }
  return (
    <>
      <div
        className="bg-image container-fluid bg-warning-subtle"
        style={{
          backgroundImage: `url(${imageForBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '87vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className='text-dark italic' style={{ textAlign: 'center' }}>
        Flavorful Escapes Await, Delicious Discoveries
        </h1>
        <h4 style={{ textAlign: 'center', color:"black" }}>
        "Join Us in a Culinary Voyage Through the World's Best Tastes"
        </h4>
        <button
                onClick={() => getMeals()}
                className="btn btn-dark mt-2"
                style={{ cursor: 'pointer' }} // Make the button appear clickable
              >
                Explore Cuisine
        </button>
      </div>
      <Category/>
      <ImagePage/>
      <Footer/>
    </>
  );
};

export default Hero;
