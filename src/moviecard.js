import React from "react";
import "./moviecard.css";

const MovieCard = () => {
  return (
    <>
      <h1>Movie App</h1>
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="http://lnkiy.in/5Qait" className="movie-img" />
          </div>
          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Supernatural power shown in the movie.</div>
            <div className="price">Rs. 199</div>
            <div className="footer">
              <div className="rating">8.9</div>
              <div className="stars">star</div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
