import React, { useEffect, useState } from "react";
import "./DealsCard.scss";
import { ShareIcon } from "../../../StoreImages/StoreImage";
import { Tooltip } from "antd";
import makeRequest from "../../../Api/makeRequest";
import { useNavigate } from "react-router-dom";
export default function DealsCard(
  {
    cardImgLeft,
    dealsText,
    DealsValue,
    fontLg,
    smallText,
  },
  props
) {
  const [src, setSrc] = useState();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  const fetchLeadDetail = async () => {
    const { data } = await makeRequest(
      "/referral/lead-form",
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;
    setSrc(data?.Lead_Shortened_Cuttly);
  };

  useEffect(() => {
    fetchLeadDetail();
  }, []);


  async function copyTextToClipboard() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(src);
    } else {
      return document.execCommand("copy", true, src);
    }
  }


  const desktopCard = (
    <div className="dealsCard whiteCard" {...props}>
      <div className="dealsCard_imgSec">
        <span className="dealsCard_imgSec_left">
          {cardImgLeft && <img src={cardImgLeft} alt="Icon" />}
        </span>
        <span className="dealsCard_imgSec_right">
          {dealsText && <h3>{dealsText}</h3>}
        </span>
      </div>
      <p className="smallText">{smallText}</p>
      <h2 className={fontLg ? "fontLg" : ""}>{DealsValue}</h2>
    </div>
  );

  const mobileCard = (
    <div className="smallCards">
      {/* Deal Referrals Card */}
      <div className="smallCards_container">
        <div className="smallCards_container_top">
          <div className="smallCards_container_left">
            {cardImgLeft && <img src={cardImgLeft} alt="Icon" />}
          </div>
          <div className="smallCards_container_right">
            <h3>{dealsText}</h3>
            <h1 className="fontStyle32Base" style={{ color: "#d82f4a" }}>
              {DealsValue}
            </h1>
          </div>
        </div>
      </div>

      {/* Partner Link Card */}
      <Tooltip trigger="click" title="Link copied to clipboard">
        <div className="smallCards_container" onClick={copyTextToClipboard}>
          <div className="smallCards_container_top">
            <div className="smallCards_container_left">
              <ShareIcon />
            </div>
            <div className="smallCards_container_right">
              <h3 style={{ color: "#0E1C2C", fontWeight: "bold" }}>
                Your Partner Link
              </h3>
            </div>
          </div>
        </div>
      </Tooltip>
    </div>
  );

  return <>{isMobile ? mobileCard : desktopCard}</>;
}
