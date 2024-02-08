import React, { useEffect, useState } from "react";
import "./CardComponent.css";

const CardComponent = () => {
  const [datas, setdatas] = useState([]);
  const [inputdata, setinputdata] = useState("");
  //fetch data
  let username = "khemchandsaini365";
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        console.log(res);
        if (!res.ok) {
          throw new Error(res.status);
        }
        console.log(res);
        const aakar = await res.json();
        console.log(aakar);
        setdatas(aakar);
        console.log(datas);
      } catch (err) {
        console.log(`Error: ${err}(internal server error)`);
      }
    };
    fetchdata();
  }, []);

  const handleInputClick = (e) => {
   
  };

  return (
    <div className="card-container">
      <div className="search-bar">
        <input
          onChange={handleInputClick}
          type="text"
          placeholder="Enter username"
        />
        <i on className="fa fa-search"></i>
      </div>
      <div className="cards">
        <div className="cover-photo">
          <img src={datas.avatar_url} className="profile" />
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
    </div>
  );
};

export default CardComponent;
