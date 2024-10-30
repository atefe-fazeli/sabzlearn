import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";

import "./Navbar.css";
import axios from "axios";
import { AllMenus } from "../../api/apiRoutes";

export default function Navbar() {
  const [allMenus, setAllMenus] = useState([]);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(AllMenus)

      .then((res) => {
        setAllMenus(res.data);
      });
  }, []);

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />

            <ul className="main-header__menu">
              <li className="main-header__item">
                <NavLink to="/" className="main-header__link">
                  صفحه اصلی
                </NavLink>
              </li>

              {allMenus.map((menu) => (
                <li className="main-header__item" key={menu.id}>
                  <Link to={`/category-info/${menu.href}/1`} className="main-header__link">
                    {menu.title}
                    {menu.submenus.length !== 0 && (
                      <>
                        <i className="fas fa-angle-down main-header__link-icon"></i>
                        <ul className="main-header__dropdown">
                          {menu.submenus.map((submenu) => (
                            <li className="main-header__dropdown-item" key={submenu.id}>
                              <Link
                                to={`/course-info/${submenu.href}`}
                                className="main-header__dropdown-link"
                              >
                                {submenu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>

            {authContext.isLoggedIn ? (
              <Link to="#" className="main-header__profile">
                <span className="main-header__profile-text">
                  {authContext.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">
                  ورود / ثبت نام
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
