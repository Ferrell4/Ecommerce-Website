import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={[<Checkout />]} />
          {/* Default route must be at the bottom */}
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
