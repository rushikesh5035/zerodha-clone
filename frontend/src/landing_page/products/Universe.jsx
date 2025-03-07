import React from "react";
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import streakLogo from "../../assets/streakLogo.png";
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import dittoLogo from "../../assets/dittoLogo.png";
import goldenpiLogo from "../../assets/goldenpiLogo.png";

const Universe = () => {
  return (
    <div className="container">
      <div className="row p-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo} alt="" />
          <p className="text-small text-muted mt-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={streakLogo} alt="" style={{ width: "43%" }} />
          <p className="text-small text-muted mt-3">Algo & Strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo} alt="" />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={zerodhaFundhouse} alt="" style={{ width: "45%" }} />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={goldenpiLogo} alt="" style={{ width: "45%" }} />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={dittoLogo} alt="" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-3">Insurance</p>
        </div>
        <button
          className="btn btn-primary fs-5 p-2.5 mt-5 mb-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
