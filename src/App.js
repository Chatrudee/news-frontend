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
import Article from './pages/Article'
import AllbookMark from "./pages/Allbookmark";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <div className="container">
            <Home />
          </div>
        </Route>
        <Route path="/article" exact>
          <Article />
        </Route>
        <Route path="/allbookmark" exact>
          <AllbookMark />
        </Route>
        
        <Redirect to="/" />
      </Switch>

      <footer className="footer"></footer>
    </Router>
  );
}
