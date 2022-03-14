import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className="App-wrapper__content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
