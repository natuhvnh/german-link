import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Brand from "./components/Brand";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Brand />
      <TopBar />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
