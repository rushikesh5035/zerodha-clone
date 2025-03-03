import React from "react";
import homeHero from "../../assets/homeHero.png";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src={homeHero} alt="Hero Image" className="mb-3" />
        <h1 className="mt-2">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary fs-5 p-2.5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
