import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./views/Hero";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
          </Route>
          <Route exact path="/signup"></Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
