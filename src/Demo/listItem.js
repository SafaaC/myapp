import React from 'react';


//function ListItem({item1,item2}){  //parameter de structuring
function ListItem(props){   // can give any name as param
   const {item1,item2,onAction}=props;  //object destructuring
   
    return (
        <div>
        <ul>
            <li onClick={()=>onAction(item1) }>{item1}</li>
            <li onClick={()=>console.log(item2)}>{item2}</li>
        </ul>
       
        </div>
    )
}
export default ListItem;