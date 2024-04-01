import React, { useState, useEffect } from "react";
import l from "./Navbar.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [val, setval] = useState([]);
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/menu").then((res) => {
      const data = res.data.data;
      delete data[0];
      delete data[5];
      setval(data);
    });
  }, []);

  return (
    <div className="container">
      <nav className={l.navbar}>
        <NavLink to="/" className={l.logo}>
          <img src="https://satis-fit.uz/_nuxt/img/logo2.e160e60.svg" alt="" />
        </NavLink>

        <ul className={l.items}>
          {val.map((items, index) => {
            return (
              <li key={index} className={l.list}>
                <NavLink to={items.link} className={l.link}>
                  {items.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button className="btn" type="button">
          buy online
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
