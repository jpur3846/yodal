import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import SignUpModal from "./components/SignUpModal";
import Hero from "./views/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Container fluid style={{ height: "100vh" }}>
        <Router>
          <Switch>
            <Route path="/">
              <Hero></Hero>
            </Route>
            <Route path="/signup">
            </Route>
            <Route path="/home">
            </Route>
          </Switch>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
