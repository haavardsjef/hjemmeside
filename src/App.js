import React from "react";
import Navigation from "./components/navigation";
import Projects from "./components/projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact";
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
