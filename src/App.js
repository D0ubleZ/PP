import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import NavBar from './component/NavBar'
import Skills from "./component/Skill";
import Work from "./component/Work";
import Contact from "./component/Contact";
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/about" component = {About}/>
          <Route exact path = "/skills" component = {Skills}/>
          <Route exact path = "/works" component = {Work}/>
          <Route exact path = "/contact" component = {Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
