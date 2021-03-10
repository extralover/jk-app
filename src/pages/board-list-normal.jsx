import React, { useState } from "react";

const BoardListNormal = (props) => {
  return (
    <section className="list-basic1 t1">
      {/* <div className="no-data">내용이 없습니다.</div> */}
      <table>
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.date}</td>
                <td>{user.view}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default BoardListNormal;
