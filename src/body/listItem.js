import React from 'react';

//function ListItem({item1,item2}){  //parameter de structuring
function ListItem(props){   // can give any name as param
   const {item1,item2,onAction}=props;  //object destructuring
   
    return (
        <div>
        <p onClick={onAction(item1) }>{item1}</p>
        <p onClick={()=>console.log(item2)}>{item2}</p>
        </div>
    )
}
export default ListItem;