import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import RequireAuth from "./components/common/ProtectedRoute/RequireAuth";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="App-wrapper__content">
          <Routes>
            <Route
              path={"/profile"}
              element={
                <RequireAuth>
                  <ProfileContainer />
                </RequireAuth>
              }
            />
            <Route path="/user/:userId" element={<ProfileContainer />} />
            <Route
              path="/dialogs/*"
              element={
                <RequireAuth>
                  <Dialogs />
                </RequireAuth>
              }
            />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
