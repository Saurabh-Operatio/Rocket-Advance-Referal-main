import React, { useEffect, useState } from "react";
import DealsCard from "./DealsCard";
import "./DealsCard.scss";
import CommisionAdv from "../../../Asset/Icons/CommisionAdv.svg";
import TotalCommision from "../../../Asset/Icons/TotalCommision.svg";
import PendingCommision from "../../../Asset/Icons/PendingCommision.svg";
import UserIconYellow from "../../../Asset/Icons/UserIconYellow.svg";
import CalenderIcon from "../../../Asset/Icons/CalenderIcon.svg";
import makeRequest from "../../../Api/makeRequest";
import { useNavigate } from "react-router-dom";

export default function DealsContainer() {
  const data = [
    {
      icon: UserIconYellow,
      dealsText: "Deal Referrals",
      DealsValue: "30",
      dateValue: "From last month (January 1, 2023) ",
      // dots: true
    },
  ];

  const navigate = useNavigate();
  const [{ referralDeals, pendingCommission, totalCommission }, setData] =
    useState({});

  const fetchReferralStats = async (value) => {
    const { data } = await makeRequest("/referral/stats", "get", undefined, "", navigate);
    if (!Object.keys(data || []).length) return;
    setData(data);
  };

  useEffect(() => {
    fetchReferralStats();
  }, []);
  return (
    <div className="dealsContainer">
      <div className="dealsContainer_left">
        <div className="smallCards">
          <div className="smallCards_container">
            <div className="smallCards_container_top">
              <div className="smallCards_container_left">
                <img src={TotalCommision} alt="Icon" />
              </div>
              <div className="smallCards_container_right">
                <h3>Total Commission</h3>
                <h1 className="fontStyle32Base" style={{ color: "#d82f4a" }}>
                  ${totalCommission?.amount?.toLocaleString() || 0}
                </h1>
              </div>
            </div>
            {/* <p className="smallCards_container_footer">
              From last month (January 1, 2023){" "}
            </p> */}
          </div>
          <div className="smallCards_container">
            <div className="smallCards_container_top">
              <div className="smallCards_container_left">
                <img src={PendingCommision} alt="Icon" />
              </div>
              <div className="smallCards_container_right">
                <h3>Pending Commission</h3>
                <h1 className="fontStyle32Base" style={{ color: "#d82f4a" }}>
                  ${pendingCommission?.amount?.toLocaleString() || 0}
                </h1>
              </div>
            </div>
            {/* <p className="smallCards_container_footer">
              From last month (January 1, 2023){" "}
            </p> */}
          </div>
        </div>
      </div>
      <DealsCard
        cardImgLeft={UserIconYellow}
        dealsText={"Deal Referrals"}
        DealsValue={referralDeals?.count || 0}
      />
    </div>
  );
}
