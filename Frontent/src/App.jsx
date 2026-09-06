import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Forth from "./Components/Forth";
import Fifth from "./Components/Fifth";
import Sixth from "./Components/Sixth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/third" element={<Third />} />
      <Route path="/forth" element={<Forth />} />
      <Route path="/fifth" element={<Fifth />} />
      <Route path="/sixth" element={<Sixth />} />
    </Routes>
  );
}

export default App;