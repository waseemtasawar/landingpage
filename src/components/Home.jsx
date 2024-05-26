import React from "react";
import backgroungImage from "../assets/back.png";
const Home = () => {
  return (
    <div className="content">
      <div className="hero-text">
        <p className="content_para">Trusted by over 2800+ companies</p>

        <h1>
          {" "}
          Dliver <span className="content-span">Your Food</span>{" "}
        </h1>
        <h1>Easy And fast</h1>
        <p className="content-alice">
          Vivamus vitae odio quam. Etiam non nibh luctus ligula tristique
          tristique.
        </p>
        <form>
          <input type="text" placeholder="Enter delivery address" />
          <button type="submit" className="btn_sec">
            Search
          </button>
        </form>
      </div>
      <div className="hero-image">
        <img src={backgroungImage} alt="background" className="image" />
      </div>
    </div>
  );
};

export default Home;
