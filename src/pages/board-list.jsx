import React, { useState } from "react";
import BoardListSearch from "./board-list-search";
import BoardListPaging from "./board-list-paging";
import BoardBtns from "./board-btns";
import BoardListNormal from "./board-list-normal";

const BoardList = () => {
	const usersData = [
    { id: 1, title: "AAA", date: "2021.02.01", view: 5 },
    { id: 2, title: "BBB", date: "2021.02.15", view: 15 },
    { id: 3, title: "CCC", date: "2021.03.10", view: 25 }
  ];
	const [users, setUsers] = useState(usersData);

  return (
    <div className="inner">
      {/* <h2>Board List</h2> */}
      <BoardListSearch />
			<BoardListNormal users={users} setUsers={setUsers} />
			<BoardListPaging />
			<BoardBtns />
    </div>
  );
};

export default BoardList;
