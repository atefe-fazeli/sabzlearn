import React, { useEffect, useState } from "react";
import Topbar from "./../../shared/Topbar/Topbar";
import Navbar from "./../../shared/Navbar/Navbar";
import Breadcrumb from "./../../shared/Breadcrumb/Breadcrumb";
import Footer from "./../../shared/Footer/Footer";
import CourseBox from "./../../shared/CourseBox/CourseBox";

import "./Courses.css";
import axios from "axios";
import { AllcoursesURL } from "../../api/apiRoutes";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(AllcoursesURL).then((res) => setCourses(res.data));
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      {/* <!--------------------------------  Courses-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.map((course) => (
                  <CourseBox course={course} key={course.id} />
                ))}
              </div>
            </div>
          </div>

          <div className="courses-pagination">
            <ul className="courses__pagination-list">
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                </a>
              </li>
              <li className="courses__pagination-item">
                <a
                  href="#"
                  className="courses__pagination-link courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  2
                </a>
              </li>
              <li className="courses__pagination-item">
                <a href="#" className="courses__pagination-link">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
