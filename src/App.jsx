import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className="App-wrapper__content">
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts} />} />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
