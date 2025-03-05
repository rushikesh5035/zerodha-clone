import React from "react";
import nithinKamath from "../../assets/nithinKamath.jpg";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">People</h1>

        <div
          className="row p-5"
          style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
        >
          <div className="col-6 p-5 text-muted text-center">
            <img
              src={nithinKamath}
              alt="nithinKamath"
              style={{ borderRadius: "50%", width: "60%" }}
            />
            <h4 className="mt-3">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-5 text-muted">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
