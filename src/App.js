import React from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import Home from "./Home";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/batchProcessing" component={FileUpload} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
