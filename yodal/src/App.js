import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./views/Hero";
import Home from "./views/Home";
import { AudioProvider } from "./context/AudioContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/shared/PrivateRoute";

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
            <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
          </Switch>
        </Router>
      </AudioProvider>
    </AuthProvider>
  );
}

export default App;
