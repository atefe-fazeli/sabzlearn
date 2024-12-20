import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Topbar.css";
import { TopbarLinks } from "../../api/apiRoutes";
import axios from "axios";

export default memo(function Topbar() {
  const [allTopbarLinks, setAllTopbarLinks] = useState([]);

  useEffect(() => {
    axios
      .get(TopbarLinks)

      .then((res) => {
        setAllTopbarLinks(res.data);
      })
      .catch((error) => {});
  }, []);

  const getRandomItemsFromArray = (arr, randomCount) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, randomCount);
  };

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {getRandomItemsFromArray(allTopbarLinks, 5).map((link) => (
                <li className="top-bar__item" key={link.id}>
                  <Link to={link.href} className="top-bar__link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                sabzlearn@gmail.com
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                09921558293
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
