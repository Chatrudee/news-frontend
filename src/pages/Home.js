import React from "react";
import BookmarkButton from "../components/Button/BookmarkButton";
import NewsCard from "../components/NewCard/NewsCard";
import { news } from "../data/testData";
import "../App.css";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Article from "./Article";

export default function Home(props) {
  const history = useHistory();
  const navigate = (id) => {
    localStorage.setItem("myData", id);
    history.push(`/article/${id}`);
  };
  return (
    <div>
      <div className="header">
        <div className="name-header">Top stories</div>
        <BookmarkButton />

        {/* <div >
          <div class="right">
            <div class="blackBox">
              <ul class="cards-wimg">
                {news
                  .filter((val) => val.id == "2")
                  .map((value) => (
                    <li onClick={() => navigate(value.id)}>
                      <a href="" class="card-section">
                        <img
                          src={value.urlToImage}
                          class="card__image"
                          alt=""
                        />
                        <div class="card__overlay">
                          <div class="card__header">
                            <div class="card__header-text">
                              <h3 class="card__title">{value.title}</h3>
                            </div>
                          </div>
                          <p class="card__description">{value.description}</p>
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div class="blackBox2">
              <ul class="cards2">
                {news
                  .filter((val) => val.id == "6")
                  .map((value) => (
                    <li onClick={() => navigate(value.id)}>
                      <a href="" class="card">
                        <h3 class="card__title2">{value.title}</h3>
                        <span class="card__status"></span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="blackBox">
              <ul class="cards-wimg">
                {news
                  .filter((val) => val.id == "3")
                  .map((value) => (
                    <li onClick={() => navigate(value.id)}>
                      <a href="" class="card-section">
                        <img
                          src={value.urlToImage}
                          class="card__image"
                          alt=""
                          style={{ width: "500px", height: "200px" }}
                        />
                        <div class="card__overlay">
                          <div class="card__header">
                            <h3 class="card__title">{value.title}</h3>
                          </div>
                          <p class="card__description">{value.description}</p>
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div class="blackBox2">
              <ul class="cards2">
                {news
                  .filter((val) => val.id == "5")
                  .map((value) => (
                    <li onClick={() => navigate(value.id)}>
                      <a href="" class="card">
                        <h3 class="card__title2">{value.title}</h3>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div class="redBox">
            <ul class="cards">
              {news
                .filter((val) => val.id == "1")
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
            */}
        {/* </div> */}
    
        <div className="container">
              <ul class="cards">
                {news.map((val) => (
                  <li onClick={() => navigate(val.id)}>
                    <a href="" class="card">
                      <img src={val.urlToImage} class="card__image" alt="" />
                      <div class="card__overlay">
                        <div class="card__header">
                          <svg
                            class="card__arc"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path />
                          </svg>
                          <div class="card__header-text">
                            <h3 class="card__title">{val.title}</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </div>
  );
}
