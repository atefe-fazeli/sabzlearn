import React from "react";
import { Link } from "react-router-dom";
import "./ArticleBox.css";

export default function ArticleBox({article}) {
  return (
    <div className="col-4">
      <div className="article-card">
        <div className="article-card__header">
          <Link
            to={`/article-info/${article.shortName}`}
            className="article-card__link-img"
          >
            <img
              src={article.cover}
              className="article-card__img"
              alt="Article Cover"
            />
          </Link>
        </div>
        <div className="article-card__content">
          <Link
            to={`/article-info/${article.shortName}`}
            className="article-card__link"
          >
            {article.title}
          </Link>
          <p className="article-card__text">{article.description}</p>
          <Link to={`/article-info/${article.shortName}`} className="article-card__btn">
            بیشتر بخوانید
          </Link>
        </div>
      </div>
    </div>
  );
}
