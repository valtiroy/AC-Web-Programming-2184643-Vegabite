import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/over" component={About} />
        <Route path="/gerechten" component={Resumes} />
        <Route path="/bestellen" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
