// TODO:
// 1) Add "Done" and "Remove" buttons to each TODO item 
// 1.1) Update 'list' from array to object; each list item should have item name and status (is completed)
// 1.2) Done -> Strikethrough, set status to 'is completed'
// 1.3) Remove -> delete from string, remove item from object

// Done: 
// 1) Autofocus input field after submit
// 2) Clear input field after submit
// 3) Disable when empty item is added 
// 4) Add a count to number of TODOs

import React, { useState } from "react";
import ItemList from "./ItemList";


function Form() {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    function handleInput(e) {
        setInput(e.target.value);
    }

    function handleList(e) {
        e.preventDefault();  //Prevent page auto refresh on click
        input !== "" && setList(item => [...item, input]) //Prevent user from adding empty todo item
        setInput(""); // Clear input field after adding todo item
    }

    function handleItemCount() {
        return list.length;
    }

    return (<form>
        <input onChange={handleInput} name="todo-input" placeholder="Add TODO here" value={input} autoFocus></input>
        <button onClick={handleList}>Add Item</button>
        <ul>{list.map((i) => ItemList(i))}</ul>
        <p>{handleItemCount()} left to do</p>
    </form>);

}

export default Form;