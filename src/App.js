import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Players from './Components/IPL_Players';
import PPT from './Components/Auction';
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
      <Navbar name="IPL" t="PPT" p="Players" s="Slide" u="Unsold"/>
      <Routes>
          <Route path="/ipl_auction_repo/" element={<Join/>} />
          <Route path="/ipl_auction_repo/PPT" element={<PPT/>} />
          <Route path="/ipl_auction_repo/Players" element={<Players/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
