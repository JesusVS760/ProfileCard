import React from "react";
import "./UserProfileCard.css";
import ProfileImage from "../Assets/Elon_Musk.jpg";

export const UserProfileCard = () => {
  return (
    <>
      <div className="upc">
        <div className="gradiant"></div>
        <div className="profile-down">
          <img src={ProfileImage} alt="" />
          <div className="profile-title">Elon Musk</div>
          <div className="profile-description">
            Elon Musk is a prominent entrepreneur, CEO, and founder of Tesla and
            SpaceX.
          </div>
          <div className="profile-button">
            <a href="mailto:elon@musk.com">Contact Me</a>
          </div>
        </div>
      </div>
    </>
  );
};
