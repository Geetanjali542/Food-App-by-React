import React from 'react';


const Footer = () => {
  return (
    <>
      <div className="container-fluid   pt-3  " style={{color:"black", backgroundColor:"#eaecee"}}>
        <footer className="footer">
          <div className="container">
            <div className="row p-3">
              
             
              <div className="col-md-4 mb-4 pt-5">
                <h5 className="fw-bold">"Join Our Foodie Community"</h5>
                <p><i> "Explore More of What We Offer"
                "Discover Our Latest Updates"
          </i></p>
              </div>
              
              {/* Contact Section */}
              <div className="col-md-4 mb-4" style={{paddingLeft:"5rem"}}>
                <h5 className="fw-bold">Contact</h5>
                <ul className="list-unstyled">
                  <li>Email: <a href="mailto:geetanjali1122330@gmail.com" className="text-decoration-none">geetanjali112233@gmail.com</a></li>
                  <hr/>
                  <li>Phone: 748-910-5958</li>
                  <hr/>
                  <li>Location: Bhopal, Madhya Pradesh, India</li>
                </ul>
              </div>
              
              
              <div className="col-md-4 mb-2" style={{paddingLeft:"5rem"}}>
                <h5 className="fw-bold">Connect with Us</h5>
                <ul className="list-unstyled d-flex flex-column">
                  <li><a href="https://www.linkedin.com/in/geetanjali-kushwaha/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a></li>
                  <hr/>
                  <li><a href="https://github.com/Geetanjali542" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a></li>
                 
                </ul>
              </div>
            </div>
            
            {/* Copyright Notice */}
            <div className="text-center">
              <p className="mb-0">&copy; 2024 Geetanjali Kushwaha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
