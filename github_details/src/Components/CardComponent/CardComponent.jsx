import React, { useEffect, useState } from "react";
import "./CardComponent.css";

const CardComponent = () => {
  const [datas, setDatas] = useState(null); // Change initial state to null
  const [inputData, setInputData] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error(res.status);
        }
        const data = await res.json();
        setDatas(data);
      } catch (err) {
        console.log(`Error: ${err}(internal server error)`);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSearchClick = () => {
    setUsername(inputData);
    setInputData("");
  };

  return (
    <div className="card-container">
      <div className="search-bar">
        <input
          onChange={handleInputChange}
          type="text"
          value={inputData}
          placeholder="Enter username"
        />
        <button className="button-search" onClick={handleSearchClick}>
          <i className="fa fa-search"></i>
        </button>
      </div>

      {datas !== null ? ( // Change condition to check for null
        <div className="cards">
          <div className="cover-photo">
            <img src={datas.avatar_url} className="profile" alt="User Avatar" />
          </div>
          <h3 className="profile-name">{datas.name}</h3>
          <p className="about">{datas.bio}</p>
          <button className="btn">Followers: {datas.followers}</button>
          <button className="btn">Following: {datas.following}</button>
          <div className="icons">
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-twitter" />
          </div>
        </div>
      ) : (
        // Display loading GIF when datas is null
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif"
            alt="Loading..."
          />
        </div>
      )}
    </div>
  );
};

export default CardComponent;
