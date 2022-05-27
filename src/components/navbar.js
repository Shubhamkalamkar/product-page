import "./navbar.css";


import React, { useState } from "react";

export const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
            <ul className="titl">
            <li onClick={()=>setShowMediaIcons(!showMediaIcons)} className="man hamburg">
              <a href="#">
              <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
            </li>
                <li>
                <h2>sneakers</h2>
                </li>
                
            </ul>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Woman</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <img className="photo" src={require("./img.jpg")} alt="profile" />
              </a>
            </li>
          </ul>


        </div>
      </nav>
    </>
  );
};
