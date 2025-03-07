import React from "react";
import pricingEquity from "../../assets/pricingEquity.svg";
import intradayTrades from "../../assets/intradayTrades.svg";
import pricingMF from "../../assets/pricingMF.svg";

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5">
        <h1>Charges</h1>
        <h5 className="text-muted mt-2">List of all charges and taxes</h5>
      </div>

      <div className="row mt-3 p-5 text-center">
        <div className="col-4 p-5">
          <img src={pricingEquity} alt="" className="p-4" />
          <h2 className="fs-3 mb-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src={intradayTrades} alt="" className="p-4" />
          <h2 className="fs-3 mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src={pricingMF} alt="" className="p-4" />
          <h2 className="fs-3 mb-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
