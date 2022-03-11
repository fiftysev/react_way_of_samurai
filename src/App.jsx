/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useRef } from "react";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      await fetch("https://reqres.in/api/users/2")
        .then((res) => res.json())
        .then((v) => {
          setData(v.data);
          setLoading(false);
        });
    };

    getUser();
  }, []);

  return (
    <div className="App-wrapper">
      <Header />
      <nav className="nav">
        <a href="#">Profile</a>
        <a href="#">Messages</a>
        <a href="#">News</a>
        <a href="#">Music</a>
        <a href="#">Settings</a>
      </nav>
      <main className="content">
        {!isLoading && (
          <div className="profile">
            <img src={`${data.avatar}`} alt="asdfsdf" className="avatar" />
            <div className="info">
              <p>
                {data.first_name} {data.last_name}
              </p>
              <p>{data.email}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
