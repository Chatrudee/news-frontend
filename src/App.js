import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Index";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Allbookmark from "./pages/Allbookmark";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div className="box">
            <Home />
          </div>
        </Route>
        <Route path="/article/:id" component={Article} exact>
          <div className="box">
            <Article />
          </div>
        </Route>
        <Route path="/allbookmark" exact>
          <div className="box">
            <Allbookmark />
          </div>
        </Route>
        <Route path="/searchpage" exact>
          <div className="box">
            <SearchPage />
          </div>
        </Route>
        <Redirect to="/" />
      </Switch>

      <footer className="footer"></footer>
    </Router>
  );
}
