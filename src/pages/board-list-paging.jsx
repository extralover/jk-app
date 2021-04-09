import React from "react";
import { NavLink } from "react-router-dom";

const BoardListPaging = () => {
  return (
    <section className="list-paging">
      <NavLink to="#" className="arr" title="go to first page"><i className="first"></i></NavLink>
      <NavLink to="#" className="arr" title="go to prev page"><i className="prev"></i></NavLink>
      <NavLink to="#" className="on">1</NavLink>
      <NavLink to="#">2</NavLink>
      <NavLink to="#">3</NavLink>
      <NavLink to="#">4</NavLink>
      <NavLink to="#">5</NavLink>
      <NavLink to="#" className="arr" title="go to next page"><i className="next"></i></NavLink>
      <NavLink to="#" className="arr" title="go to last page"><i className="last"></i></NavLink>
    </section>
  );
};

export default BoardListPaging;
