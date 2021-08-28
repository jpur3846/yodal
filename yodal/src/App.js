import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Hero from "./views/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Container fluid className="px-sm-5 px-3" style={{ height: "100vh" }}>
        <Router>
          <Switch>
            <Route path="/">
              <Hero></Hero>
            </Route>
            <Route path="/signup">
              <p>Sign up</p>
            </Route>
            <Route path="/home">
              <p>Home page</p>
            </Route>
          </Switch>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
