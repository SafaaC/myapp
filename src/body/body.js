import React from 'react';
import Para from './para.js'
import Paras from './paras.js'
import List from './list.js'
import Tools from './tools.js';
import { useState } from "react";  

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
    var [data,setData] =useState(arr);
    function onListChange(event){
        console.log(event.target.value);
        const value=event.target.value;
        let newArr= arr.filter((item) =>{
            if(value==='all'){
                return true;
            }
            if(value==='active'){
                return item.isActive===true;
            }
            if(value==='non-active'){
                return item.isActive===false;
            }
               
            return false;
        })
        console.log(newArr);
        setData(newArr);
    }
    return(
      <div id="myId" className='class' >
            <Paras/>
            <Para/>
            <Tools onAction={onListChange}>
                <div>
                    {
                        data.map((obj,index)=><List key={index} header={obj.header} desc={obj.description} item1={obj.item1} item2={obj.item2} isActive={obj.isActive}/>
                        )
                    }
                </div>
             </Tools>    
      </div>   
    )
  }

  export default BodyDisplayFunction;