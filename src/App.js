import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Teams from './Components/IPL_Teams';
import Players from './Components/IPL_Players';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Join from './Components/Join';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar name="IPL" t="Teams" p="Players"/>
      <Routes>
          <Route path="/Join" element={<Join/>} />
          <Route path="/Teams" element={<Teams/>} />
          <Route path="/Players" element={<Players/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
