import React, { useEffect, useState } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "./../SectionHeader/SectionHeader";
import "./LastArticles.css";
import { AllArticlesURL } from "../../api/apiRoutes";
import axios from "axios";

export default function LastArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(AllArticlesURL)
      .then((res) => {
        setArticles(res.data);
      });
  }, []);

  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />

        <div className="articles__content">
          <div className="row">
            {articles.slice(0, 3).map((article) => (
              <ArticleBox article={article} key={article.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
