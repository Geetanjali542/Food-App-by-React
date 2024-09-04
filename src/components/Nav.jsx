import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [food, setFood] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setFood(response.data);
      navigate('/SingleFood', { state: { food: response.data } }); // Navigate and pass the data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle p-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-dark" style={{fontSize:"1.5rem"}}><b>SavoryQuest</b></span>

        <form className="row g-3 align-items-center" onSubmit={submitHandler}>
        <div className="col-12 col-md-8">
          <input
            className="form-control"
            type="search"
            placeholder="Search food by name"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-4">
          <button className="btn btn-outline-dark w-100" type="submit">
            Search
          </button>
        </div>
      </form>

       
      </div>
    </nav>
  );
};

export default Nav;
