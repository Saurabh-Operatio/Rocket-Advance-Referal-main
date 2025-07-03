import React from "react";
import "./Dashboard.scss";
import DealsContainer from "../../PagesComponents/DashboardComponents/DealsCard/DealsContainer";
import AllDeals from "../../PagesComponents/DashboardComponents/AllDeals/AllDeals";
import NewDealsInputs from "../../PagesComponents/DashboardComponents/NewDealsComponent/NewDealsInputs.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_inner">
        <div className="dashboard_inner_left">
          <NewDealsInputs />
        </div>
        <div className="dashboard_inner_right">
          <DealsContainer />
          {/* <AllDeals /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
