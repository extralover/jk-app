import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function GNB() {
  return (
    <>
      <div className="inner">
        <nav className="gnb">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mypage">My Page</Link>
            </li>
            <li>
              <Link to="/board-list">List</Link>
            </li>
            <li>
              <Link to="/board-detail">Detail</Link>
            </li>
            <li>
              <Link to="/board-write">Write</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default GNB;
