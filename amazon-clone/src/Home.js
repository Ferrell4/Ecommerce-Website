import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img
              className="home__image" 
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg" 
              alt="">
            </img>
        

            <div className="home__row">
              <Product
                id =''
                title ='The Lean Startup'
                price ={29.99}
                image ='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating ={5}
              />
              <Product
                id =''
                title ='Digital Storm Lynx'
                price ={1599.99}
                image ='https://m.media-amazon.com/images/I/819XYUimTuL.jpg'
                rating ={4}  
              /> 
            </div>

            <div className="home__row">
              <Product
                id =''
                title ='Dell Desktop Computer Package'
                price ={239}
                image ='https://m.media-amazon.com/images/I/718sn7oOcfL.jpg'
                rating ={4}  
              /> 
              <Product
                id =''
                title ='HP Elite Desktop PC Computer '
                price ={239}
                image ='https://m.media-amazon.com/images/I/418Pr9d2K1L._AC_.jpg'
                rating ={4}  
              /> 
              <Product
                id =''
                title ='HP 24-cb0017 24" FHD Touchscreen All-in-One'
                price ={669}
                image ='https://m.media-amazon.com/images/I/41bV68sHFxL._AC_.jpg'
                rating ={4}  
              /> 
            </div>

            <div className="home__row">
              <Product
                id =''
                title ='Apple 2020 MacBook Air Laptop'
                price ={799}
                image ='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71jG+e7roXL._AC_SX679_.jpg'
                rating ={4}  
              /> 
            </div>
        </div>
    </div>

  )
}

export default Home