import React, { useState } from "react";
import "antd/dist/antd.min.css";
import ReactCalendar from "./ReactCalendar";
import { Row, Col } from "antd";
import IMAGES from "./img/index.js";

export default function Home() {
  const [bgIndex, setBgIndex] = useState("");

  return (
    <Row justify="space-around" align="middle">
      <Col xs={24} md={14} lg={17}>
        <img src={IMAGES[bgIndex]} alt={bgIndex} />
      </Col>
      <Col xs={18} md={10} lg={7}>
        <ReactCalendar bgIndex={bgIndex} bgIndexUpdate={setBgIndex} />
      </Col>
    </Row>
  );
}
