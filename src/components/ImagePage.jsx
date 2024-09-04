import React from 'react';
import cake from "../images for background/cake.jpg";
import coffee from "../images for background/coffee.jpg";
import dish from "../images for background/dish.jpg";
import drink from "../images for background/drink.jpg";
// import icecream from "../images for background/icecream.jpg";
import lasagna from "../images for background/lasagna.jpg";
import macroon from "../images for background/macroon.jpg";
import pasta from "../images for background/pasta.jpg";
import pastatwo from "../images for background/pastatwo.jpg";
import pasttriee from "../images for background/pasttriee.jpg";

const ImagePage = () => {
  return (
    <>
     <div 
      className='container-fluid bg-danger-subtle' 
      style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center items horizontally
        gap: '20px', // Space between cards
        padding: '10px',
       
        boxSizing: 'border-box'
      }}
    >
     
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={cake} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Cake</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={coffee} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Coffee</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={dish} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Rice with salad and egg</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px", paddingTop:"5rem" }}>
          <img src={drink} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Strawberry Juice</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={lasagna} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Lasagna</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px", paddingTop:"10rem" }}>
          <img src={macroon} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Macroon</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
     
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={pastatwo} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">White Sauce Pasta</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div className='pt-4' style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={pasta} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Pasta</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>
      <div  style={{ flex: '1 1 18rem', maxWidth: '18rem', border:"1px", borderRadius:"5px" }}>
          <img src={pasttriee} className="card-img-top" alt="Delicious E" />
          <div className="card-body">
            <h5 className="card-title">Pastry</h5>
            {/* <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p> */}
            
          </div>
      </div>










    </div>
    </>
  );
}

export default ImagePage;
