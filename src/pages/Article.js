import React, { useState, useEffect } from "react";
import { news } from "../data/testData";
import { useRouteMatch, useLocation } from "react-router-dom";
import AddBookmark from "../components/Button/AddBookmark";
import RemoveBookmark from "../components/Button/RemoveBookmark";

export default function Article(props) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(localStorage.getItem("myData"));
  }, []);
  console.log(userData);

  return (
    <div className="container">
      <div>
        {news
          .filter((data) => data.id == userData)
          .map((filteredData) => (
            <div>
                {filteredData.bookmark ? <AddBookmark /> : <RemoveBookmark />}
              <div class="row">
                <div class="column1">
                  <p>{filteredData.publishedAt}</p>
                  <h1>{filteredData.title}</h1>
                  <h3>{filteredData.description}</h3>
                  <hr/>
                  <p>{filteredData.content}</p>
                </div>
                <div class="column2">
                  <img
                    className="article-image"
                    src={filteredData.urlToImage}
                  />
                </div>
              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}
