import React, { useEffect, useState } from "react";
import "./ContactUs.scss";
import { ShareIcon } from "../../StoreImages/StoreImage";
import makeRequest from "../../Api/makeRequest";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";

export default function ContactUs() {
  const [src, setSrc] = useState();
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
  return (
    <div>
      <div className="contactUs">
        <div>Contact US</div>
        <p style={{ marginBottom: 22 }}>
          Ask Us how you could grow your income today
        </p>
      <p style={{ marginBottom: 22 }}>Get your commission advance today!</p>
      <p className="linkText">
        <a href="mailto:info@rocketadvance.ca">info@rocketadvance.ca</a>
      </p>
      <p>
        <a href="tel:18005183577">1-800-518-3577</a>
      </p<
      </div>
      <div className="contactUs share" onClick={copyTextToClipboard}>
        <div>Your Partner Link</div>
        <Tooltip trigger="click" title="Link copied to clipboard">
          <div>
            <ShareIcon />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
