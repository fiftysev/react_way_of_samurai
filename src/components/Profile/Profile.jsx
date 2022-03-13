import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";

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
    <div className={styles.content}>
      {!isLoading && (
        <div className={styles.profile}>
          <img src={`${data.avatar}`} alt="asdfsdf" className={styles.avatar} />
          <div className={styles.info}>
            <p>
              {data.first_name} {data.last_name}
            </p>
            <p>{data.email}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile;