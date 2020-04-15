import React from "react";

const List = ({ items, deleteToDo, count }) => {
  console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className="list-item" key={item.id}>
            <button onClick={() => deleteToDo(item.id)}>X</button>{" "}
            {item.contents}
          </li>
        ))}
      </ul>
      <p>{count}</p>
    </div>
  );
};

export default List;
