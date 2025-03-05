import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={learnMore} className="text-decoration-none">
              {learnMore} &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
