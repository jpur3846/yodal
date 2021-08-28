import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./views/Hero";
import Post from "./components/Posts/Post";

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
            <Post></Post>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
