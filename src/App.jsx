import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Films from "./Components/Films";
import People from "./Components/People";
import Navbar from "./Components/Navbar";
import PeopleDetails from "./Components/PeopleDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/Films" element={<Films />} />

        <Route exact path="/People" element={<People />} />
        <Route exact path="/People/:id" element={<PeopleDetails />} />
        {/* <Route path="*">
          <h1>Sorry, no path Available</h1>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
