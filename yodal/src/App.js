import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Router>
          <Switch>
            <Route path="/">
              <p>We are home</p>
            </Route>
          </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
