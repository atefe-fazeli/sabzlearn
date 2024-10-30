import React, { useEffect, useState } from "react";
import Topbar from "./../../shared/Topbar/Topbar";
import Navbar from "./../../shared/Navbar/Navbar";
import Breadcrumb from "./../../shared/Breadcrumb/Breadcrumb";
import Footer from "./../../shared/Footer/Footer";
import CourseBox from "./../../shared/CourseBox/CourseBox";
import Pagination from './../../shared/Pagination/Pagination'
import "./Courses.css";
import axios from "axios";
import { AllcoursesURL } from "../../api/apiRoutes";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [shownCourses, setShownCourses] = useState([])
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
                {shownCourses.map((course) => (
                  <CourseBox course={course} key={course.id} />
                ))}
              </div>
            </div>
          </div>

       
          <Pagination
            items={courses}
            itemsCount={3}
            pathname="/courses"
            setShownCourses={setShownCourses}
          />
        </div>
      </section>
      {/* <!--------------------------------  Courses-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
