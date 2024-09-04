import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/biryani.jpg'; 
import burger from '../images/burger.jpg';
import curry from '../images/curry.jpg';
import e from '../images/e.jpg';
import idli from '../images/idli.jpg';
import pancake from '../images/pancake.jpg';

const Category = () => {
  return (
    <>
    <div className='bg-danger-subtle'>
    <h3 className='text-center pt-5 '>Read on Different types of flavors</h3>
    <div className='container-fluid pt-5 bg-danger-subtle' style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center items horizontally
        gap: '5rem', // Space between cards
        padding: '10px',
       
        boxSizing: 'border-box', // Include padding in the width
      }}>


        
        <div className="card" style={{ flex: '1 1 18rem', maxWidth: '18rem' }}>
          <img src={image} className="card-img-top" alt="Delicious Biryani" />
          <div className="card-body">
            <h5 className="card-title"><b>Spicy Food</b> </h5>
            <p className="card-text">

            <b>Spices:</b> Chili peppers, black pepper, paprika.
            <br/>

            <b>Hot Sauces:</b> Sriracha, Tabasco.
            <br/>

            <b>Spicy Foods:</b> Indian curries, Mexican salsas, Sichuan dishes.
            <br/>
            <b>Wasabi and Horseradish:</b> Commonly used in Japanese and Eastern European cuisine.
            </p>
            <Link  to={"/FlavorsPage"} class="btn btn-secondary">Read more on flavors type and foods</Link>
            
          </div>
        </div>

        <div className="card" style={{ flex: '1 1 18rem', maxWidth: '18rem' }}>
          <img src={curry} className="card-img-top" alt="Delicious Curry" />
          <div className="card-body">
            <h5 className="card-title"><b></b>Sour Food</h5>
            <p className="card-text">
            <b>Fruits:</b> Lemons, limes, grapefruits
            <br/>
            <b>Dairy:</b> Yogurt, buttermilk.
            <br/>
            <b>Condiments:</b> Vinegar, pickles.
            <br/>
            <b>Fermented Foods:</b> Sauerkraut, kimchi.
            </p>
            <Link  to={"/FlavorsPage"} class="btn btn-secondary">Read more on flavors type and foods</Link>
            
          </div>
        </div>

        <div className="card" style={{ flex: '1 1 18rem', maxWidth: '18rem' }}>
          <img src={e} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title"><b>Savory and Umani</b></h5>
            <p className="card-text">
            <b>Meats:</b> Beef, pork, chicken.<br/>
            <b>Seafood:</b> Salmon, tuna, shellfish.
            <br/>
            <b>Vegetables:</b> Tomatoes, mushrooms, spinach.
            <br/>
            <b>Condiments:</b> Soy sauce, miso paste, Parmesan cheese.
            <br/>
            <b>Broths:</b> Chicken broth, beef broth.
            <br/>
            <b>Meats:</b> Roast chicken, pork ribs.
            <br/>
            <b>Cheeses:</b> Gouda, cheddar, blue cheese.
            <br/>
            <b>Seasonings:</b> Garlic, onions, thyme.
            </p>
            <Link  to={"/FlavorsPage"} class="btn btn-secondary">Read more on flavors type and foods</Link>
            
          </div>
        </div>

        <div className="card" style={{ flex: '1 1 18rem', maxWidth: '18rem' }}>
          <img src={idli} className="card-img-top" alt="Delicious Idli" />
          <div className="card-body">
            <h5 className="card-title">Salty Food</h5>
            <p className="card-text">
            <b>Snacks:</b> Pretzels, chips, salted nuts.
            <br/>
            <b>Condiments:</b> Soy sauce, salted butter, olives.
            <br/>
            <b>Processed Foods:</b> Bacon, cured meats, cheese.
            <br/>
            <b>Seafood:</b> Anchovies, salted cod.
            </p>
            <Link  to={"/FlavorsPage"} class="btn btn-secondary">Read more on flavors type and foods</Link>
           
          </div>
        </div>

        <div className="card" style={{ flex: '1 1 18rem', maxWidth: '18rem' }}>
          <img src={pancake} className="card-img-top" alt="Delicious Pancake" />
          <div className="card-body">
            <h5 className="card-title"><b>Sweet Foods</b></h5>
            <p className="card-text">
            <b>Fruits:</b> Apples, bananas, berries, mangoes.
            <br/>
            <b>Sweeteners:</b> Honey, maple syrup, agave nectar.
            <br/>
            <b>Desserts:</b> Cakes, cookies, ice cream.
            <br/>
            <b>Sweet Vegetables:</b> Sweet potatoes, carrots, corn.
            </p>
            <Link  to={"/FlavorsPage"} class="btn btn-secondary">Read more on flavors type and foods</Link>
           
          </div>
        </div>

        <div className="card" style={{ flex: '1 1 18rem', maxWidth: '18rem' }}>
          <img src={burger} className="card-img-top" alt="Delicious Burger" />
          <div className="card-body">
            <h5 className="card-title"><b>Bitter Food</b></h5>
            <p className="card-text">
            <b>Beverages: Coffee, black tea.</b>
            <br/>
            <b>Vegetables:</b> Kale, Brussels sprouts, bitter melon.
            <br/>
            <b>Chocolate:</b> Dark chocolate.
            <br/>
            <b>Herbs:</b> Dandelion greens, arugula.
            <br/>
            </p>
            <Link  to={"/FlavorsPage"} class="btn btn-secondary">Read more on flavors type and foods</Link>
           
          </div>
        </div>

      </div>


      </div>
      
    </>
  )
}

export default Category
