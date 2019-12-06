import React, { Component } from "react";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Intro from "../components/Intro";
import Info from "../components/Info";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import Steps from "../components/Steps";
import Form from "../components/Form";
import Partners from "../components/Partners";
import Maps from "../components/Maps";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Card />
        <Intro />
        <Info />
        <Services />
        <Conditions />
        <Steps />
        <Form />
        <Partners />
        <Maps />
      </div>
    );
  }
}

export default Home;
