import React from "react";
import googlePlayBadge from "../../assets/googlePlayBadge.svg";
import appstoreBadge from "../../assets/appstoreBadge.svg";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-4 p-5">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} className="text-decoration-none">
              {tryDemo} &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              className="text-decoration-none"
              style={{ marginLeft: "50px" }}
            >
              {learnMore} &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src={googlePlayBadge} alt="" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src={appstoreBadge} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
