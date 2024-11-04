import React, { useEffect, useState } from "react";
import { GetUserURL, SeeNotificationURL } from "../../../api/apiRoutes";
import axios from "axios";

export default function Topbar() {
  const [adminInfo, setAdminInfo] = useState({});
  const [adminNotifications, setAdminNotifications] = useState([]);
  const [isShowNotificationsBox, setIsShowNotificationsBox] = useState(false);
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(GetUserURL, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
      .then((res) => {
       
        setAdminInfo(res.data);
        setAdminNotifications(res.data.notifications);
      });
  }, [seeNotification]);

  function seeNotification(notficationID) {
    axios
      .put(SeeNotificationURL(notficationID), {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div class="container-fluid">
      <div class="container">
        <div
          class={`home-header ${
            isShowNotificationsBox && "active-modal-notfication"
          }`}
        >
          <div class="home-right">
            <div class="home-searchbar">
              <input type="text" class="search-bar" placeholder="جستجو..." />
            </div>
            <div class="home-notification">
              <button
                type="button"
                onClick={() =>
                  setIsShowNotificationsBox(!isShowNotificationsBox)
                }
              >
                <i class="far fa-bell"></i>
              </button>
            </div>
            <div class="home-notification-modal">
              <ul class="home-notification-modal-list">
                {adminNotifications.length === 0 ? (
                  <li class="home-notification-modal-item">
                    نوتیفکیشنی برای نمایش وجود ندارد
                  </li>
                ) : (
                  <>
                    
                    {adminNotifications.map((notification) => (
                      <li
                        class="home-notification-modal-item"
                        key={notification.id}
                      >
                        <span class="home-notification-modal-text">
                          {notification}
                        </span>
                        <label class="switch">
                          <a
                            href="javascript:void(0)"
                            id={notification.id}
                            onClick={(e) => seeNotification(e.target.id)}
                          >
                            دیدم
                          </a>
                        </label>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div class="home-left">
            <div class="home-profile">
              <div class="home-profile-image">
                <a href="#">
                  <img src={adminInfo.profile} alt="" />
                </a>
              </div>
              <div class="home-profile-name">
                <a href="#">{adminInfo.name}</a>
              </div>
              <div class="home-profile-icon">
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
