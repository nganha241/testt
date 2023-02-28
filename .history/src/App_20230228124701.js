import React from "react";
import Footer from "./pages/footer/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
