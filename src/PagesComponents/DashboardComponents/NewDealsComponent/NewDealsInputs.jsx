import React, { useEffect, useState } from "react";
import InputCustom from "../../../Components/InputCustom/InputCustom.jsx";
import ButtonCustom from "../../../Components/ButtonCustom/ButtonCustom.jsx";
import { Col, Row } from "antd";
import "./NewDealsComponent.scss";
import makeRequest from "../../../Api/makeRequest.js";
import { useNavigate } from "react-router-dom";

export default function NewDealsInputs() {
  const [src, setSrc] = useState("");
  const navigate = useNavigate();
  const [iframeHeight, setIframeHeight] = useState("auto");
  const resizeIframe = (event) => {
    setIframeHeight("882px");
  };
  const fetchLeadDetail = async () => {
    const { data } = await makeRequest(
      "/referral/lead-form",
      "get",
      undefined,
      "",
      navigate
    );
    if (!Object.keys(data || []).length) return;
    setSrc(data?.Short_Lead_Referral_Form);
  };

  useEffect(() => {
    fetchLeadDetail();
  }, []);
  return (
    <div className="newDealsformInputs">
      <h1 className="headingText">Submit a referral</h1>
      <iframe
        src={src}
        className="newDealsFrame"
        height={iframeHeight}
        onLoad={resizeIframe}
      />

      {/* <Row style={{ marginTop: 14 }} gutter={[16, 16]}>
        <Col xs={24}>
          <InputCustom placeholder={"Name *"} />
        </Col>
        <Col xs={24}>
          <InputCustom placeholder={"Email *"} />
        </Col>
        <Col xs={24}>
          <InputCustom placeholder={"Phone *"} />
        </Col>
        <Col xs={24}>
          <InputCustom placeholder={"Address"} />
        </Col>
        <Col xs={24} xl={12}>
          <InputCustom placeholder={"City"} />
        </Col>
        <Col xs={24} xl={12}>
          <InputCustom placeholder={"Province"} />
        </Col>
      </Row>
      <Row style={{ marginTop: 14 }} gutter={[16, 16]}>
        <Col xs={24} xl={12}>
          <InputCustom placeholder={"Postal Code"} />
        </Col>
        <Col xs={24} xl={12}>
          <InputCustom placeholder={"Country"} />
        </Col>
        <Col xs={24}>
          <ButtonCustom customClass={"formBtn"} label={"Submit"} />
        </Col>
      </Row> */}
    </div>
  );
}
