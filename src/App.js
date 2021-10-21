import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import "@nosferatu500/react-sortable-tree/style.css";

function App() {
  return (
    <div id="container">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
