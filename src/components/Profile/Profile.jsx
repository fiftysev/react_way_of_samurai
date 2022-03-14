import React, { useState, useEffect } from "react";
import Posts from "./Posts/Posts";
import s from "./profile.module.css";

const Profile = () => {
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
    <>
      {!isLoading && (
        <div className={s.wrapper}>
          <div className={s.profile}>
            <img src={`${data.avatar}`} alt="asdfsdf" className={s.avatar} />
            <div className={s.info}>
              <p className={s.info__text}>
                {data.first_name} {data.last_name}
              </p>
              <p className={s.info__text}>{data.email}</p>
            </div>
          </div>
        </div>
      )}
      <Posts />
    </>
  );
};

export default Profile;
