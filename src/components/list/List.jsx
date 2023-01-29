import React from "react";
import "./list.css";

function List({ userInfo }) {

  return (
    <ul>
      {userInfo.map((elem) => {
        return (
          <div className="list-info">
            <div className="name-age">
              <p className="title">{elem.title}</p>
              <p>{`(${elem.age} years old)`}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default List;
