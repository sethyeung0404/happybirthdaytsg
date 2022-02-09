import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import Background from "../components/Background";
import ReactCalendar from "../components/ReactCalendar";
import { Row, Col } from "antd";

function Home() {
  const [bgIndex, setBgIndex] = useState();

  return (
    <Row justify="space-around" align="middle">
      <Col xs={24} md={14} lg={17}>
        <Background bgIndex={bgIndex} />
      </Col>
      <Col xs={18} md={10} lg={7}>
        <ReactCalendar bgIndex={bgIndex} bgIndexUpdate={setBgIndex} />
      </Col>
    </Row>
  );
}

export default Home;
