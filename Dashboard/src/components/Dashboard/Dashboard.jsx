import React from "react";

import { Route, Routes } from "react-router-dom";

import Apps from "../Apps/Apps";
import Funds from "../Funds/Funds";
import Holdings from "../Holdings/Holdings";
import Orders from "../Orders/Orders";
import Positions from "../Positions/Positions";
import Summary from "../Summary/Summary";
import WatchList from "../WatchList/WatchList";
import { GeneralContextProvider } from "../GeneralContext/GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
