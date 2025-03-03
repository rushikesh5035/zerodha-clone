import React from "react";
import education from "../../assets/education.svg";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={education} alt="education" style={{ width: "70%" }} />
        </div>
        <div className="col-6 p-3 mt-3">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-decoration-none" href="">
            Varsity &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="text-decoration-none" href="">
            TradingQ&A &nbsp;
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
