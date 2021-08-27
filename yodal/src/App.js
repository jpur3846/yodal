import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid className="px-sm-5 px-3" style={{ height: '100vh' }}>
      <NavBar />
      <Router>
          <Switch>
            <Route path="/">
              <p>We are home</p>
              <h1>TESTING</h1>
            </Route>
          </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
