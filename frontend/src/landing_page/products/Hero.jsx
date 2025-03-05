import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row mb-5 mt-5 p-5 text-center">
        <h1 className="p-2">Zerodha Products</h1>
        <h4 className="p-2 fs-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="fs-6 mt-3 mb-5">
          Check out our &nbsp;
          <a href="" className="text-decoration-none">
            investment offerings &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
