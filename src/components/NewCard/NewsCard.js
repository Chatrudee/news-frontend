import React, {useState} from "react";
import { news } from "../../data/testData";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
export default function NewsCard() {
  const history = useHistory();
  const navigate = (id) => {
    localStorage.setItem("myData", id);
    history.push(`/article/${id}`);
  };
  return (
    <div>
      <div className="container">
      <ul class="cards">
              {news
                .filter((val) => val.bookmark==true)
                .map((value) => (
                  <li onClick={() => navigate(value.id)}>
                    <a href="" class="card">
                      <img src={value.urlToImage} class="card__image" alt="" />
                      <div class="card__overlay">
                        <div class="card__header">
                          <svg
                            class="card__arc"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path />
                          </svg>
                          <div class="card__header-text">
                            <h3 class="card__title">{value.title}</h3>
                            <span class="card__status"></span>
                          </div>
                        </div>
                        <p class="card__description">{value.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
      </div>
    </div>
  );
}
