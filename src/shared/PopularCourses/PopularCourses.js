import React, { useEffect, useState } from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseBox from "./../../shared/CourseBox/CourseBox";
import "swiper/css";
import "swiper/css/pagination";
import "./PopularCourses.css";
import axios from "axios";
import { PopularCoursesURL } from "../../api/apiRoutes";

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(PopularCoursesURL).then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجوها"
        />

        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper"
              >
                {courses.map((course) => (
                  <SwiperSlide>
                    <CourseBox course={course} isSlider={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
