import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./LastCourses.css";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourses() {
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
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
