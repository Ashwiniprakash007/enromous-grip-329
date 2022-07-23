import React, { useState } from "react";
import "./Navbar.css";
import { Platform } from "./Platform/Platform";
import { Product } from "./Product/Product";
import { Resources } from "./Resources/Resources";
import { Search } from "./Search/Search";
import { Signin } from "./Signin/Signin";
import { SearchIcon } from "@chakra-ui/icons";
import Sidebar from "./SideBar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
const Navbar = () => {
  const [platform, setPlatform] = useState(false);
  const [product, setProduct] = useState(false);
  const [resources, setSources] = useState(false);
  const [signin, setSignIn] = useState(false);
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    if (signin === true) {
      setSignIn(false);
      return;
    }
    if (!isAuth) {
      setSignIn(true);
    }
    setPlatform(false);
    setSearch(false);
    setProduct(false);
    setSources(false);
    // setSignIn(true);
    console.log("hello");
  };
  function something(val) {
    return setSearch(val);
  }
  return (
    <div className="externalBox">
      <div className="container">
        <div className="box-left">
          <img
            src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/global/header/PS_logo.png"
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="box-center">
          <div
            className={platform ? "c-box-active" : "c-box"}
            onClick={() => {
              if (platform === true) {
                setPlatform(false);
                return;
              }
              setSearch(false);
              setPlatform(true);
              setProduct(false);
              setSources(false);
              setSignIn(false);
            }}
            style={{ fontSize: "1.2rem" }}
          >
            Platform
          </div>
          <div
            className={product ? "c-box-active" : "c-box"}
            onClick={() => {
              if (product === true) {
                setProduct(false);
                return;
              }
              setPlatform(false);
              setProduct(true);
              setSources(false);
              setSignIn(false);
              setSearch(false);
            }}
            style={{ fontSize: "1.2rem" }}
          >
            Product
          </div>
          <div
            className={resources ? "c-box-active" : "c-box"}
            onClick={() => {
              if (resources === true) {
                setSources(false);
                return;
              }
              setPlatform(false);
              setProduct(false);
              setSearch(false);
              setSources(true);
              setSignIn(false);
            }}
            style={{ fontSize: "1.2rem" }}
          >
            Resources
          </div>
          <div
            className="c-box c-box-last"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Individuals
          </div>
        </div>
        <div className="box-right">
          <div
            className="r-box-search"
            onClick={() => {
              if (search === true) {
                setSearch(false);
                return;
              }
              setPlatform(false);
              setSearch(true);
              setProduct(false);
              setSources(false);
              setSignIn(false);
            }}
          >
            <SearchIcon />
          </div>
          <div
            className={signin ? "r-box-sign-in-active" : "r-box-sign-in"}
            onClick={() => {
              handleLogout();
            }}
            style={{ cursor: "pointer" }}
          >
            {isAuth ? "Logout" : "sign-in"}
          </div>
          <div className="r-box-btn">Try For Free</div>
        </div>
        <div className="mobile-menu-icon">
          <FaBars
            onClick={() => {
              if (sidebar === true) {
                setSidebar(false);
                return;
              }
              setSidebar(true);
            }}
          />
        </div>
      </div>
      <Platform value={platform} />
      <Resources value={resources} />
      <Product value={product} />
      <Signin value={signin} />
      <Search value={search} something={something} />
      <Sidebar value={sidebar} />
    </div>
  );
};

export default Navbar;
