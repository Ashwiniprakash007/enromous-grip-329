import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
export const Signin = ({ value }) => {
  const navigate = useNavigate();
  return (
    <div
      className={value ? "true" : "false"}
      onClick={() => {
        navigate("/login", { replace: true });
      }}
    >
      <div className="sign-in-div">
        <div className="sign-in-box sign-in-box-1">
          <p className="heading-lists">SIGN IN WITH</p>
          <img
            src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png"
            alt=""
          />
        </div>
        <div className="sign-in-box">
          <p className="heading-lists">SIGN IN WITH</p>
          <img
            src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
