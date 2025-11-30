import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";


import Voting from "./Components/Voting";
import Results from "./Components/Resultpage";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import Dharapuram from "./Votingbooth/Dharapuram";
import Avanashi from "./Votingbooth/Avanashi";
import Kangayam from "./Votingbooth/Kangayam";
import Madathukulam from "./Votingbooth/Madathukulam";
import Palladam from "./Votingbooth/Palladam";
import TiruppurNorth from "./Votingbooth/TiruppurNorth";
import TiruppurSouth from "./Votingbooth/TiruppurSouth";
import Udumalaipettai from "./Votingbooth/Udumalaipettai";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/results" element={<Results />} />
        <Route path="/register" element={<Register />} />
        <Route path="/votingbooth/dharapuram" element={<Dharapuram />} />
        <Route path="/votingbooth/avanashi" element={<Avanashi />} />
        <Route path="/votingbooth/kangayam" element={<Kangayam />} />
        <Route path="/votingbooth/madathukulam" element={<Madathukulam />} />
        <Route path="/votingbooth/palladam" element={<Palladam />} />
        <Route path="/votingbooth/tiruppurnorth" element={<TiruppurNorth />} />
        <Route path="/votingbooth/tiruppursouth" element={<TiruppurSouth />} />
        <Route path="/votingbooth/udumalaipettai" element={<Udumalaipettai />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
