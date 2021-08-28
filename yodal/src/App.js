import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Hero from "./views/Hero";
import Post from "./components/Posts/Post";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/">
            <Hero></Hero>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
