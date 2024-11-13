import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/About";
import TipsList from "./pages/Tips";
import ChatBot from "./pages/ChatBot";
import Footer from "./components/Footer";
import Questions from "./pages/Questions";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <TipsList isLoggedIn={isLoggedIn} />
              <Questions />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<TipsList isLoggedIn={isLoggedIn} />} />
        <Route path="/chat-bot" element={<ChatBot />} />{" "}
        {/* Keep path consistent */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
