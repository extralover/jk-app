import React from "react";
import { Link } from "react-router-dom";

const BoardBtns = () => {
  return (
    <section className="btn-btm">
      <div className="btn-wrap">
        <Link to="/board-write" className="btn-box3 fr">Upload</Link>
      </div>
    </section>
  );
};

export default BoardBtns;
