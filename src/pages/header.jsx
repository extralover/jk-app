import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  console.log('Header');
  return (
    <>
      <header>
        <section className="hd1-wrap">
          <div className="inner">
            <h1 className="logo">
              <Link to="/">
                <img src="./assets/images/logo.png" alt="Hubilon" />
              </Link>
            </h1>
            <article className="tnb-wrap">
              <Link to="/signin" className="btn-box1">
                Sign In
              </Link>
              <Link to="/signup" className="btn-box1">
                Sign Up
              </Link>
              <Link to="/" target="_blank" className="btn-box2">
                link
              </Link>
            </article>
          </div>
        </section>
        <section className="hd2-wrap">
          <div className="inner">
            <nav className="gnb">
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName={'on'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/board-list" activeClassName={'on'}>List</NavLink>
                </li>
                <li>
                  <NavLink to="/board-detail" activeClassName={'on'}>Detail</NavLink>
                </li>
                <li>
                  <NavLink to="/board-write" activeClassName={'on'}>Write</NavLink>
                </li>
                <li>
                  <NavLink to="/mypage" activeClassName={'on'}>My Page</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
