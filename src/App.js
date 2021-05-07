import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// pages
import HomePage from "./pages/Home";
import Register from "./pages/Register/Register";
import Sales from "./pages/Sales";
import Repairs from "./pages/Repairs";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/repairs">
            <Repairs />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/add_product">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
