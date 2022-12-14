// TODO:
// 1) Use Tailwind to update visual

// Done:
// 1) Autofocus input field after submit
// 2) Clear input field after submit
// 3) Disable when empty item is added
// 4) Add a count to number of TODOs
// 5) Comlpete -> delete from string, remove item from array

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

  function handleComplete(e, itemIndex) {
    e.preventDefault(); //Prevent page auto refresh on click
    setList((prevList) => {
      return prevList.filter((listItem, index) => {
        return index !== itemIndex;
      });
    });
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
            id={index}
          />
        ))}
      </ul>
      <p>{list.length} left to do</p>
    </form>
  );
}

export default Form;
