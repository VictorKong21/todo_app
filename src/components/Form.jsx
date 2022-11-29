import React, { useState } from "react";

function Form() {

    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    function handleInput(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setList(list => [...list, item]);
    }

    return (<form>
        <p>{list.map((i) => (<div><span>{i}</span><hr /></div>))}</p>
        <input onChange={handleInput} name="todo-input" placeholder="Add TODO here"></input>
        <button onClick={handleClick}>Add Item</button>
        <p>0 left to do</p>
    </form>);

}

export default Form;