import React from "react";
import NewsCard from "../components/NewCard/NewsCard";
import "../App.css";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Select from "../components/Button/Select";

export default function Home(props ) {
  return (
    <BrowserRouter>
      <div>
        <div className="header">
          <div className="name-header">All Bookmark</div>
          <Select/>
          </div>
          <NewsCard/>
        
      </div>
    </BrowserRouter>
  );
}
