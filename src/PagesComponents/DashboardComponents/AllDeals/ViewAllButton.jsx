import React from "react";
import "./AllDeals.scss";
import ArrowRight from "../../../Asset/Icons/arrow-right.svg";

export default function ViewAllButton({ onClick, text }) {
  return (
    <button className="viewAllButton" onClick={onClick}>
      <span>{text}</span>{" "}
      <img src={ArrowRight} alt="Arrow" width={12} height={12} />
    </button>
  );
}
