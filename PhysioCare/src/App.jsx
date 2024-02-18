import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Forms from "./components/Forms";
import Payment from "./components/Payment";
import Mandatoryform from "./components/Mandatoryform";
import Sevaform from "./components/Sevaform";
import Geriatricform from "./components/Geriatricform";
import Sutardaraform from "./components/Sutardaraform";
import Normalform from "./components/Normalform";
import Combinedform from "./components/Combinedform";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/mandatoryform" element={<Mandatoryform />} />
            <Route path="/sevaform" element={<Sevaform />} />
            <Route path="/geriatricform" element={<Geriatricform />} />
            <Route path="/sutardaraform" element={<Sutardaraform />} />
            <Route path="/combinedform" element={<Combinedform />} />
            <Route path="/normalform" element={<Normalform />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
