import React from "react";

function ItemList(props) {
  return (
    <div onClick={(e) => props.complete(e, props.id)} className="list-item">
      {props.text}
    </div>
  );
}

export default ItemList;
