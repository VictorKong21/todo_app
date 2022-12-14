// TODO:
// 1) Comlpete -> delete from string, remove item from array
// 2) Use Tailwind to update visual

// Done:
// 1) Autofocus input field after submit
// 2) Clear input field after submit
// 3) Disable when empty item is added
// 4) Add a count to number of TODOs

import React, { useState } from "react";
import ItemList from "./ItemList";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleList(e) {
    e.preventDefault(); //Prevent page auto refresh on click
    input !== "" && setList((item) => [...item, input]); //Prevent user from adding empty todo item
    setInput(""); // Clear input field after adding todo item
  }

  function handleComplete(e, index) {
    e.preventDefault(); //Prevent page auto refresh on click
    console.log("clicked on complete" + index);
    // console.log("Index of item clicked in array: ")
  }

  return (
    <form>
      <input
        onChange={handleInput}
        name="todo-input"
        placeholder="Add TODO here"
        value={input}
        autoFocus
      ></input>
      <button onClick={handleList}>Add Item</button>
      <ul>
        {list.map((todoItem, index) => (
          <ItemList
            key={uuidv4()}
            text={todoItem}
            complete={handleComplete}
            index={index}
          />
        ))}
      </ul>
      <p>{list.length} left to do</p>
    </form>
  );
}

export default Form;
