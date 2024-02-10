import React, { useEffect, useState } from "react";
import "./CardComponent.css";

const CardComponent = () => {
  const [datas, setDatas] = useState(null);
  const [inputData, setInputData] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);

  useEffect(() => {
    if (searchInitiated && username) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(`https://api.github.com/users/${username}`);
          if (!res.ok) {
            setDatas(null);
            throw new Error(res.status);
          }
          const data = await res.json();
          setDatas(data);
        } catch (err) {
          console.log(`Error: ${err}(internal server error)`);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [searchInitiated, username]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSearchClick = () => {
    setUsername(inputData);
    setInputData("");
    setSearchInitiated(true); // Set searchInitiated to true when search is initiated
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
      {loading ? (
        <div className="loading">
          <img
            src="https://th.bing.com/th/id/R.e42cb20be6939bc8590dede0a20cc6e0?rik=Z%2be10J5aE%2fbNQA&riu=http%3a%2f%2forig11.deviantart.net%2f03d6%2ff%2f2014%2f122%2f7%2fa%2floading_gif_by_zarzox-d7gwtxy.png&ehk=k6Hd%2bH5rAoGufy5%2fceZac7VuV1WDPSM%2bj9clzC5uzPo%3d&risl=&pid=ImgRaw&r=0"
            alt="Loading..."
          />
        </div>
      ) : datas === null && searchInitiated ? ( // Check if searchInitiated is true
        <div className="not-found">
          <p>User not found.</p>
        </div>
      ) : datas !== null && searchInitiated ? ( // Check if searchInitiated is true
        <div className="cards">
          <div className="cover-photo">
            <img src={datas.avatar_url} className="profile" alt="User Avatar" />
          </div>
          <h3 className="profile-name">{datas.name}</h3>
          <p className="about">{datas.bio}</p>
          <button className="btn">Followers: {datas.followers}</button>
          <button className="btn">Following: {datas.following}</button>
          <div className="icons">
            <a href={datas.blog}>
              <i className="fa-brands fa-linkedin" />
            </a>
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-twitter" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardComponent;
