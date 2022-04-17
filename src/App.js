import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import Home from './components/Home'
import Edit from './components/Edit'
import AddEmployee from './components/AddEmployee';
import {
  BrowserRouter as Router,
 
  Route,
 
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/employee" element={<EmployeeList/>}></Route>
          <Route path="/employee/add" element={<AddEmployee/>}></Route>
          <Route path="/employee/edit/:id" element={<Edit/>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
