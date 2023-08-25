import React from 'react';
import Para from './para.js'
import Paras from './paras.js'
import List from './list.js'
import Tools from './tools.js';
import { useState } from "react"; 
import SimpleList from './SimpleList.js';
import Conditional from './Conditional.js';

let arr=[
        
        {
            header:"React",
            description:"Component",
            item1:"functional component  ",
            item2:"class component",
            isActive: false
        },
        {
            header:"JSX",
            description:"Small addition to JS",
            item1:" JS  ",
            item2:" XML",
            isActive: true
        },
        {
            header:"Props",
            description:"Pass data from one component to another",
            item1:"through param in function",
            item2:"through this.props in class",
            isActive: true
        }
]



function BodyDisplayFunction(){
    const [data,setData] =useState(arr);
    const [status,setStatus] =useState('all');
    function onListChange(event){
        console.log(event.target.value);
        const value=event.target.value;
        setStatus(value);
    }
    let newArr= data.filter((item) =>{
        if(status==='all'){
            return true;
        }
        if(status==='active'){
            return item.isActive===true;
        }
        if(status==='non-active'){
            return item.isActive===false;
        }
           
        return false;
    })

    let deleteHandler=(index)=>{
        console.log("delete",index);
        const newArr=data.filter((element,ind)=>ind!==index);
        setData(newArr);
    }

    console.log(newArr);
    return(
      <div id="myId" className='class' >
            <Paras/>
            <Para/>
            <Tools onAction={onListChange}>
                <SimpleList data={newArr} onAction={deleteHandler}/>  
                {/* CONTROLLED COMPONENT */}
            </Tools>
            <Conditional/> 
      </div>   
    )
  }

  export default BodyDisplayFunction;