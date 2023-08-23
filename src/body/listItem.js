import React from 'react';

function ListItem(props){   // can give any name as param
    return (
        <div>
        <p>{props.item1}</p>
        <p>{props.item2}</p>
        </div>
    )
}
export default ListItem;