import React from 'react';


function ItemList(props) {
    return <li>{props.text}
        <button onClick={props.complete}>Complete</button>
    </li>
}


export default ItemList;