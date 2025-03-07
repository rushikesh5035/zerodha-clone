import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h2 className="fs-2 text-muted">
          To create a ticket, select a relevant topic
        </h2>
        <div className="col-4 p-5 mt-3 text-muted">
          <h4>
            <i class="fa fa-plus-circle fa-sm" aria-hidden="true"></i> Account
            Opening
          </h4>
          <div style={{ marginLeft: "25px", lineHeight: "40px" }}>
            <a href="" className="text-decoration-none">
              Resident individual
            </a>
            <br />
            <a href="" className="text-decoration-none mb-3">
              Minor
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Non Resident Indian (NRI)
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Company, Partnership, HUF and LLP
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Glossary
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-3  text-muted">
          <h4>
            <i class="fa fa-user-circle fa-sm" aria-hidden="true"></i> Your
            Zerodha Account
          </h4>
          <div style={{ marginLeft: "25px", lineHeight: "40px" }}>
            <a href="" className="text-decoration-none">
              Your Profile
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Account modification
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Nomination
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Transfer and conversion of securities
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mt-3  text-muted">
          <h4>
            <i class="fa fa-bar-chart fa-sm" aria-hidden="true"></i> Kite
          </h4>
          <div style={{ marginLeft: "25px", lineHeight: "40px" }}>
            <a href="" className="text-decoration-none">
              IPO
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Trading FAQs
            </a>
            <a href="" className="text-decoration-none">
              Margin Trading Facility (MTF) and Margins
            </a>
            <a href="" className="text-decoration-none">
              Charts and orders
            </a>
            <a href="" className="text-decoration-none">
              Alerts and Nudges
            </a>
            <a href="" className="text-decoration-none">
              General
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mb-3 text-muted">
          <h4>
            <i class="fa fa-file-o fa-sm" aria-hidden="true"></i> Funds
          </h4>
          <div style={{ marginLeft: "25px", lineHeight: "40px" }}>
            <a href="" className="text-decoration-none">
              Add money
            </a>
            <br />
            <a href="" className="text-decoration-none mb-3">
              Withdraw money
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Add bank accounts
            </a>
            <br />
            <a href="" className="text-decoration-none">
              eMandates
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mb-3 text-muted">
          <h4>
            <i class="fa fa-adjust fa-sm" aria-hidden="true"></i> Console
          </h4>
          <div style={{ marginLeft: "25px", lineHeight: "40px" }}>
            <a href="" className="text-decoration-none">
              Portfolio
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Corporate actions
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Funds statement
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Reports
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Profile
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Segments
            </a>
          </div>
        </div>

        <div className="col-4 p-5 mb-3 text-muted">
          <h4>
            <i class="fa fa-circle-o-notch fa-sm" aria-hidden="true"></i> Coin
          </h4>
          <div style={{ marginLeft: "25px", lineHeight: "40px" }}>
            <a href="" className="text-decoration-none">
              Understanding mutual funds and Coin
            </a>
            <br />
            <a href="" className="text-decoration-none">
              Coin app
            </a>
            <a href="" className="text-decoration-none">
              Coin web
            </a>
            <a href="" className="text-decoration-none">
              Transactions and reports
            </a>
            <a href="" className="text-decoration-none">
              National Pension Scheme (NPS)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
