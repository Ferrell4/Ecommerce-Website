import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={[<Login />,  <h1>I am a checkout page</h1>]} />
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          {/* Default route must be at the bottom */}
          <Route path="/" element={[<Header />,<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
