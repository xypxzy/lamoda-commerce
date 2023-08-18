import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

//Страница если пользователь попробует найти не существующую страницу
const NotFoundPage: React.FC = () => {
  return (
    <div className={"h-screen w-full flex flex-col items-center justify-center"}>
      <p className="zoom-area">
        Упс ! Что то пошло не так. Страница не найдена
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
