import React, { useEffect, useState } from "react";
import Topbar from "./../../shared/Topbar/Topbar";
import Navbar from "./../../shared/Navbar/Navbar";
import Footer from "./../../shared/Footer/Footer";
import "./Category.css";
import CourseBox from "../../shared/CourseBox/CourseBox";
import Pagination from "../../shared/Pagination/Pagination";
import { CategoryURL } from "../../api/apiRoutes";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Category() {
  const [courses,setCourses]=useState([])
  const{categoryName}=useParams()
  useEffect(() => {
    axios.get(CategoryURL(categoryName)).then((res) => setCourses(res.data));
  }, [categoryName]);
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">
                    هنوز هیچ دوره‌ای برای این کتگوری وجود ندارد
                  </div>
                ) : (
                  <>
                    <div className="courses-top-bar">
                      <div className="courses-top-bar__right">
                        <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div className="courses-top-bar__column-btn">
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            مرتب سازی پیش فرض
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            <li className="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                              مرتب سازی پیش فرض
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس محبوبیت
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس امتیاز
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس آخرین
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس ارزان ترین
                            </li>
                            <li className="courses-top-bar__selection-item">
                              مربت سازی بر اساس گران ترین
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="courses-top-bar__left">
                        <form action="#" className="courses-top-bar__form">
                          <input
                            type="text"
                            className="courses-top-bar__input"
                            placeholder="جستجوی دوره ..."
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>
                    {courses.map((course) => (
                     <CourseBox course={course} key={course.id}/>
                    ))}
                    <Pagination />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
