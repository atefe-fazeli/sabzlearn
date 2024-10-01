import React from "react";
import Header from "../../shared/Header/Header";
import "./Index.css";
import LastCourses from "../../shared/LastCourses/LastCourses";
import AboutUs from "../../shared/AboutUs/AboutUs";
import PopularCourses from "../../shared/PopularCourses/PopularCourses";
import PresellCourses from "../../shared/PresellCourses/PresellCourses";
import LastArticles from "../../shared/LastArticles/LastArticles";
import Footer from "../../shared/Footer/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs/>
      <PopularCourses />
      <PresellCourses />
      <LastArticles/>
      <Footer />
    </>
  );
}
