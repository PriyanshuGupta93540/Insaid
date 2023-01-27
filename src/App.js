import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./Components/Screens/Contactus";
import Home from "./Components/Screens/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
