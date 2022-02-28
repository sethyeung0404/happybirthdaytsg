import React from "react";
import styled from "styled-components";

const Bg = styled.img`
  max-height: 100vh;
  width: 100%;
`;

export default class Background extends React.Component {
  backgroundSwitch = (bgIndex) => {
    let index = bgIndex;

    if (index === 0) {
      return <Bg src={require("../img/0.PNG")} />;
    } else if (index === 1) {
      return <Bg src={require("../img/1.PNG")} />;
    } else if (index === 2) {
      return <Bg src={require("../img/2.PNG")} />;
    } else if (index === 3) {
      return <Bg src={require("../img/3.PNG")} />;
    } else if (index === 4) {
      return <Bg src={require("../img/4.PNG")} />;
    } else if (index === 5) {
      return <Bg src={require("../img/5.PNG")} />;
    } else if (index === 6) {
      return <Bg src={require("../img/6.PNG")} />;
    } else if (index === 7) {
      return <Bg src={require("../img/7.PNG")} />;
    } else if (index === 8) {
      return <Bg src={require("../img/8.PNG")} />;
    } else if (index === 9) {
      return <Bg src={require("../img/9.PNG")} />;
    } else {
      return <Bg src={require("../img/0.PNG")} />;
    }
  };

  render() {
    return (
      <>
        <div>{this.backgroundSwitch(this.props.bgIndex)}</div>
      </>
    );
  }
}
