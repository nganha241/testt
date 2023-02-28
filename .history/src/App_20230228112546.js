import React from "react";
import Home from "./pages/Home";
import Nav from "./pages/nav/Nav";
import Navbar from "./pages/Navbar/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
