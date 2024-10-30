import React, { useEffect, useState } from "react";
import Topbar from "./../../shared/Topbar/Topbar";
import Navbar from "./../../shared/Navbar/Navbar";
import Footer from "./../../shared/Footer/Footer";
import Breadcrumb from "./../../shared/Breadcrumb/Breadcrumb";
import ArticleBox from "./../../shared/ArticleBox/ArticleBox";
import Pagination from "./../../shared/Pagination/Pagination";
import "./Articles.css";
import axios from "axios";
import { AllArticlesURL } from "../../api/apiRoutes";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [shownArticles, setShownArticles] = useState([]);

  useEffect(() => {
    axios
      .get(AllArticlesURL)
      .then((res) => {
        console.log(res);
        setArticles(res.data);
      });
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
            title: "تمامی مقاله ها",
            to: "articles/1",
          },
        ]}
      />

      {/* <!--------------------------------  Articles-Section  --------------------------------> */}
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {shownArticles.map((article) => (
                  <ArticleBox article={article} key={article.id}/>
                ))}
              </div>
            </div>
          </div>

          <Pagination
            items={articles}
            itemsCount={3}
            pathname="/articles"
            setShownCourses={setShownArticles}
          />
        </div>
      </section>
      {/* <!--------------------------------  Articles-Section  --------------------------------> */}

      <Footer />
    </>
  );
}
