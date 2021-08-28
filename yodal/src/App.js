import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./views/Hero";
import Home from "./views/Home";
import { AudioProvider } from "./context/AudioContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/shared/PrivateRoute";
import Threads from "./views/Home/Threads";

function App() {
  return (
    <AuthProvider>
      <AudioProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Hero></Hero>
            </Route>
            <Route exact path="/signup"></Route>
            <Route exact path="/threads">
              <Threads></Threads>
            </Route>
            <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
          </Switch>
        </Router>
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
