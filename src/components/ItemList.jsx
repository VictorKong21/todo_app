import React from "react";

function ItemList(props) {
  return (
    <li>
      {props.text}
      <button onClick={(e) => props.complete(e, props.index)}>Complete</button>
    </li>
  );
}

export default ItemList;
