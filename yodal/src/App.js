import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Hero from "./views/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/">
            <Hero></Hero>
          </Route>
          <Route path="/signup"></Route>
          <Route path="/home"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
