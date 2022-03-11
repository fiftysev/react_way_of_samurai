import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
      <Navbar />
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
