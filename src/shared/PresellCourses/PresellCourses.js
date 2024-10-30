import React, { useEffect, useState } from "react";
import CourseBox from "./../../shared/CourseBox/CourseBox";
import SectionHeader from "./../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "./PresellCourses.css";
import "swiper/css/pagination";
import { PresellCoursesURL } from "../../api/apiRoutes";
export default function PresellCourses() {
  const [presellCourses, setPresellCourses] = useState([]);
  useEffect(() => {
    axios.get(PresellCoursesURL).then((res) => setPresellCourses(res.data));
  },[]);
  return (
    <div class="popular">
      <div class="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="متن تستی برای توضیحات دوره های پیش فروش"
        />

        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper"
              >
                {presellCourses.map((course) => (
                  <SwiperSlide>
                    <CourseBox course={course} key={course.id} isSlider={true} />
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
