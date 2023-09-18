import React from 'react';
import featuredImg1 from '../../assets/Images/featured-img1.jpg';
import featuredImg2 from '../../assets/Images/featured-img2.jpg';
import categoryImage1 from '../../assets/Images/category-img1.jpg'; 
import categoryImage2 from '../../assets/Images/category-img2.jpg'; 
import categoryImage3 from '../../assets/Images/category-img3.jpg'; 
import categoryImage4 from '../../assets/Images/category-img4.jpg'; 

import './home.css'

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Travel Blog Diary</h1>
        <p>Discover amazing travel stories and plan your next adventure!</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="featured-section">
        <h2>Featured Stories</h2>
        <div className="featured-posts">
          <div className="featured-post">
            <img src={featuredImg1} alt="Post 1" />
            <h3>Post Title 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempore sed esse numquam, fugiat non animi neque, aliquid sint nihil minus similique. Optio nesciunt ullam consectetur commodi cum, voluptate officia magni ipsa porro, sed voluptates odio quae velit! Consequatur corporis laboriosam inventore animi at, ratione odit quam ipsum consectetur fugiat.</p>
          </div>
          <div className="featured-post">
            <img src={featuredImg2} alt="Post 2" />
            <h3>Post Title 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis qui laboriosam repudiandae, pariatur consectetur quibusdam aliquam id veniam quis quae in rerum. Dolorem accusantium explicabo sit repudiandae dicta. Temporibus adipisci quia iusto accusantium praesentium quisquam, quibusdam sapiente earum, facilis minima tenetur at voluptatibus odio qui illum incidunt inventore nisi.</p>
          </div>
        </div>
      </div>
      {/* <div className="categories-section">
        <h2>Categories or Destinations</h2>
        <div className="category">
          <img src={categoryImage1} alt="Category 1" />
          <h3>Category 1</h3>
        </div>
        <div className="category">
          <img src={categoryImage2} alt="Category 2" />
          <h3>Category 2</h3>
        </div>
      </div> */}
      <div id="categorySlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
             <img src={categoryImage1}  className="d-block w-100" alt="Category 2" />
              <div className="carousel-caption">
                <h3>Category 1</h3>
              </div>
            </div>
            <div className="carousel-item">
             <img src={categoryImage2}  className="d-block w-100" alt="Category 1" />
              <div className="carousel-caption">
                <h3>Category 2</h3>
              </div>
            </div>
            <div className="carousel-item">
             <img src={categoryImage3}  className="d-block w-100" alt="Category 3" />
              <div className="carousel-caption">
                <h3>Category 3</h3>
              </div>
            </div> <div className="carousel-item">
             <img src={categoryImage4}  className="d-block w-100" alt="Category 4" />
              <div className="carousel-caption">
                <h3>Category 4</h3>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#categorySlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#categorySlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  );
}

export default Home;

