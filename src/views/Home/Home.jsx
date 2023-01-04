import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeView--container"></div>
      <div className="homeView--container__components">
        <div className="box-container">
          <h1>PLAYER 1</h1>
          <button className="homeView--button">
            <Link to={`/allgames`} className="text-white no-underline text-2xl">
              Start
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
