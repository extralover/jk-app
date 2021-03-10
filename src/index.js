import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./pages/header";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Mypage from "./pages/mypage";
import BoardList from "./pages/board-list";
import BoardDetail from "./pages/board-detail";
import BoardWrite from "./pages/board-write";

ReactDOM.render(
  <Router>
    <div className="wrap">
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Header />
          <main className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mypage">
              <Mypage />
            </Route>
            <Route path="/board-list">
              <BoardList />
            </Route>
            <Route path="/board-detail">
              <BoardDetail />
            </Route>
            <Route path="/board-write">
              <BoardWrite />
            </Route>
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
