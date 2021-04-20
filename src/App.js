import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/Portofolio-React" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
