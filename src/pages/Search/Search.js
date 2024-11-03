import React, { useEffect, useState } from "react";
import Topbar from "./../../shared/Topbar/Topbar";
import Navbar from "./../../shared/Navbar/Navbar";
import Footer from "./../../shared/Footer/Footer";
import { useParams } from "react-router-dom";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import CourseBox from "../../shared/CourseBox/CourseBox";
import ArticleBox from "../../shared/ArticleBox/ArticleBox";
import axios from "axios";
import { SearchURL } from "../../api/apiRoutes";

export default function Search() {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();

  useEffect(() => {
    axios.get(SearchURL(value))
      .then((res) => {
        console.log(res.data);
        setArticles(res.data.allResultArticles);
        setCourses(res.data.allResultCourses);
      });
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="courses">
        <div className="container">
          <SectionHeader
            title="نتیجه دوره‌ها برای جستجوی شما"
            desc="سکوی پرتاپ شما به سمت موفقیت"
          />
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">
                    دوره‌ای برای جستجوی شما وجود ندارد
                  </div>
                ) : (
                  <>
                    {courses.map((course) => (
                      <CourseBox key={course._id} course={course} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="courses">
        <div className="container">
          <SectionHeader
            title="نتیجه مقالات برای جستجوی شما"
            desc="پیش به سوی ارتقای دانش"
          />
          <div className="articles__content">
            <div className="row">
              {articles.length === 0 ? (
                <div className="alert alert-warning">
                  مقاله‌ای برای جستجوی شما وجود ندارد
                </div>
              ) : (
                <>
                  {articles.map((article) => (
                    <ArticleBox article={article} key={article._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
