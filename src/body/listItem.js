import React from 'react';
import Tools from './tools';

//function ListItem({item1,item2}){  //parameter de structuring
function ListItem(props){   // can give any name as param
   const {item1,item2,onAction}=props;  //object destructuring
   
    return (
        <div>
        <Tools>
        <p onClick={()=>onAction(item1) }>{item1}</p>
        <p onClick={()=>console.log(item2)}>{item2}</p>
        </Tools>
        </div>
    )
}
export default ListItem;