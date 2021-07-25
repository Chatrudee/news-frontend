import React from "react";
import "../../App.css";
import logo from "../../images/Logo_White.png";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { news } from "../../data/testData";
import SearchPage from "../../pages/SearchPage";

export default function Index() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const history = useHistory();

  const refreshPage = () => {
    history.push("/home");
  };

  const navtoSearch = () => {
    history.push("/searchpage");
  };



  return (
    <div>
      <div class="nav" >
        <img src={logo} alt="Logo" onClick={refreshPage} className="nav-logo" />
      </div>
      <div class="search-box" >
        <button class="btn-search" onClick={navtoSearch}>
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
    </div>
  );
}
