import React, { useState } from "react";
import "./ValentineCard.css";

const ValentineCard = () => {
  return (
    <div className="card-container">
      <div className="container">
        <div className="valentines">
          <div className="envelope" />
          <div className="front" />
          <div className="card">
            <div className="text">
              Happy
              <br />
              Valentine's Day!
            </div>
            <div className="texts">My Love!</div>
            <div className="heart"></div>
            <div className="hearts">
              <div className="one" />
              <div className="two" />
              <div className="three" />
              <div className="four" />
              <div className="five" />
            </div>
          </div>
        </div>
        <div className="shadow" />
      </div>
    </div>
  );
};

export default ValentineCard;
