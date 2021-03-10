import React from "react";
import { NavLink, Link } from "react-router-dom";

const BoardListSearch = () => {
  return (
    <section className="list-search">
      <div className="page-wrap">
        <dl>
          <dt>total</dt>
          <dd>160</dd>
        </dl>
        <dl>
          <dt>page</dt>
          <dd>1/6</dd>
        </dl>
      </div>
      <div className="input-wrap">
        <select>
          <option>Title</option>
          <option>Date</option>
        </select>
        <input type="search" />
        <button className="btn-search" title="Search"></button>
      </div>
    </section>
  );
};

export default BoardListSearch;
