import React from "react";
import Header from "../../shared/Header/Header";
import "./Index.css";
import LastCourses from "../../shared/LastCourses/LastCourses";
import AboutUs from "../../shared/AboutUs/AboutUs";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs/>
    </>
  );
}
