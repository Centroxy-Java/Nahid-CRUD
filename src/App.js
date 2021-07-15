import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Createemployee from "./components/Createemployee";
import EmployeList from './components/Employelist';
import Editemployee from "./components/Editemployee";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/Createemployee'} className="nav-link">Add Employee</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/EmployeList'} className="nav-link">Employee List</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route exact path='/Createemployee' component={Createemployee} />
            <Route path='/Editemployee/:id' component={Editemployee} />
            <Route path='/EmployeList' component={EmployeList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;