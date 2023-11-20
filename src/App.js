import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/homepage.component";
import ThongSoIn from "./components/thong-so-in/thongsoin.components";


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<ThongSoIn />} />
      </Routes>
    </div>
  );
}

export default App;
