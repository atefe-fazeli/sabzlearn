import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastCourses.css";
import CourseBox from "../CourseBox/CourseBox";
import { LastCoursesURL } from "../../api/apiRoutes";
import axios from "axios";

export default function LastCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(LastCoursesURL).then((res) => console.log(res));
  }, []);
  return (
    <>
      <div class="courses">
        <div class="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
          />
          <div class="courses-content">
            <div class="container">
              <div class="row">
                {courses.splice(0, 6).map((course) => (
                  <CourseBox {...course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
