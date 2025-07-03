import React from "react";
import "./AllDeals.scss";
import ViewAllButton from "./ViewAllButton";

export default function AllDeals() {
  const data = [
    {
      day: "01",
      date: "January 1, 2023",
      address: "1384 Wellington Rd S London, Ontario",
      btn: <ViewAllButton text={"View Details"} />,
    },
    {
      day: "02",
      date: "January 1, 2023",
      address: "1384 Wellington Rd S London, Ontario",
      btn: <ViewAllButton text={"View Details"} />,
    },
    {
      day: "03",
      date: "January 1, 2023",
      address: "1384 Wellington Rd S London, Ontario",
      btn: <ViewAllButton text={"View Details"} />,
    },
    {
      day: "04",
      date: "January 1, 2023",
      address: "1384 Wellington Rd S London, Ontario",
      btn: <ViewAllButton text={"View Details"} />,
    },
    {
      day: "05",
      date: "January 1, 2023",
      address: "1384 Wellington Rd S London, Ontario",
      btn: <ViewAllButton text={"View Details"} />,
    },
  ];
  return (
    <div className="allDeals">
      <div className="allDeals_wrapper whiteCard">
        <div className="allDeals_wrapper_head">
          <h1 className="headingText">Deals</h1>
          <ViewAllButton text={"View All"} />
        </div>
        <div className="allDeals_wrapper_items">
          {data.map((ele, index) => (
            <div key={index} className="dealsList">
              <h3>
                {ele.day}
                <span>{`( ${ele.date})`}</span>
              </h3>
              <div>
                <p>{ele.address}</p>
                {ele.btn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
