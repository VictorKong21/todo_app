import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function ItemList(i) {
    return <li key={uuidv4()}>{i}
        <button>Complete</button>
        <button>Remove</button>
    </li>
}


export default ItemList;