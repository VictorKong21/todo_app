import React from 'react';


function ItemList(props) {

    function handleComplete(e) {
        e.preventDefault();  //Prevent page auto refresh on click
        console.log("clicked on complete");
    }

    function handleRemove(e) {
        e.preventDefault();  //Prevent page auto refresh on click
        console.log("clicked on remove");
    }

    return <li>{props.text}
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleRemove}>Remove</button>
    </li>
}


export default ItemList;