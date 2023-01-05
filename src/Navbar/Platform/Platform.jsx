import React from "react";
import { Link } from "react-router-dom";
import "./Platform.css";
export const Platform = ({ value }) => {
  return (
    <div className={value ? "true" : "false"}>
      <div className="perfumes-dropdown">
        <div className="div-1">
          <h3 className="heading-lists">WAYS TO UPSKILL</h3>
          <ul>
            <Link to={"/courses"}>
              <li>Courses</li>
            </Link>
            <li>Skill Assesment</li>
            <li>Labs</li>
            <li>Hands on learning</li>
            <li>Certification Prep</li>
            <li>Team Efficiency</li>
          </ul>
        </div>
        <div className="div-2">
          <div className="up-nav">
            <div className="up-nav-list">
              <h3 className="hedarput heading-lists">SKILLS FOR</h3>
              <ul className="inner-list">
                <li>Software Development</li>
                <li>IT ops</li>
                <li>Info and Cyber Security</li>
                <li>Cloud Computing</li>
                <li>Machine Learning/AI</li>
                <li>Data professional</li>
              </ul>
            </div>
            <div div className="row-div">
              <h3 className="heading-lists">TRENDING PATHS</h3>
              <div className="up-nav-card">
                <div className="box">
                  <img
                    src="https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png?w=75"
                    alt=""
                  />
                  <div>
                    <p>Microsoft Azure deployment</p>
                    <p></p>
                  </div>
                </div>
                <div className="box">
                  <img
                    src="https://pluralsight2.imgix.net/paths/images/r-programming-eb2e267a97.png?w=75"
                    alt=""
                  />
                  <div>
                    <p>Cleaning Data With R</p>
                    <p></p>
                  </div>
                </div>
                <div className="box">
                  <img
                    src="https://pluralsight2.imgix.net/paths/images/ruby-7e88ddd5f0.png?w=75"
                    alt=""
                  />
                  <div>
                    <p>Ruby Language Fundamentals</p>
                    <p></p>
                  </div>
                </div>
                <div className="box">
                  <img
                    src="https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png?w=75"
                    alt="certified-devops-engineer image"
                  />
                  <div>
                    <p>AWS Operations</p>
                    <p></p>
                  </div>
                </div>
                <div className="box">
                  <img
                    src="https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png?w=75"
                    alt=""
                  />
                  <div>
                    <p>Core Python</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="down-nav"></div>
        </div>
      </div>
    </div>
  );
};
