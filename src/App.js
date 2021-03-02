import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "../src/pages/grid/index";
import Detail from "../src/pages/detail/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Grid} />
        <Route exact path="/detail" component={Detail} />
      </Router>
    </div>
  );
}

export default App;
