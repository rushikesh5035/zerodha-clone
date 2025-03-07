import React from "react";

const CreateTicket = () => {
  return (
    <div id="supportHero">
      <div className="container">
        <div className="p-3" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="" style={{ color: "white" }}>
            Track tickets
          </a>
        </div>
        <div className="row p-5">
          <div className="col-6 p-5">
            <h1 className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input type="text" placeholder="Eg. how do I activate F&O" />
            <br />
            <a href="" style={{ color: "white" }}>
              Track account opening
            </a>
            <a href="" style={{ color: "white" }}>
              Track segment activation
            </a>
            <a href="" style={{ color: "white" }}>
              Intraday margins
            </a>{" "}
            <br />
            <a href="" style={{ color: "white" }}>
              Kite user manual
            </a>
          </div>
          <div className="col-6 p-5" id="leftSection">
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li>
                <a href="" style={{ color: "white" }}>
                  Surveillance measure on scrips - March 2025
                </a>
              </li>{" "}
              <br />
              <li>
                <a href="" style={{ color: "white" }}>
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
