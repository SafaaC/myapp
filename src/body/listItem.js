import React from 'react';

//function ListItem({item1,item2}){  //parameter de structuring
function ListItem(props){   // can give any name as param
   const {item1,item2}=props;  //object destructuring
   
    return (
        <div>
        <p>{item1}</p>
        <p>{item2}</p>
        </div>
    )
}
export default ListItem;