import React from "react";
import { news } from "../data/testData";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div>
      <div class="search-box" style={{ marginTop: "-17.9rem" }}>
        <button class="btn-search">
          <i class="fa fa-search"></i>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
          onfocus=" "
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="header">
          <div className="name-header">Search result</div>

          </div>
      <div>
        {news
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
     
            .map(val => (
            <div className="container">
            <ul class="cards">
            <li>
                
                <a href="" class="card">
                  <img
                    src={val.urlToImage}
                    class="card__image"
                    alt=""
                  />
                  <div class="card__overlay">
                    <div class="card__header">
                      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <div class="card__header-text">
                        <h3 class="card__title">{val.title}</h3>
                      </div>
                    </div>
      
                  </div>
                </a>
              </li> 
              
            </ul>
            </div>
            
            ))}
      </div>
    </div>
  );
}




