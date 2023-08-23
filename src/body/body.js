import React from 'react';
import Para from './para.js'
import Paras from './paras.js'
import List from './list.js'

const arr=[
        {
            header:"JSX",
            description:"small addition to JS",
            item1:" JS  ",
            item2:" XML",
            isActive: true
        },
        {
            header:"React",
            description:"Component",
            item1:"functional component  ",
            item2:"class component",
            isActive: false
        }
]


function BodyDisplayFunction(){
    return(
      <div id="myId" className='class' >
            <Paras/>
            <Para/>
            <div>
                {
                    arr.map((obj,index)=><List key={index} header={obj.header} desc={obj.description} item1={obj.item1} item2={obj.item2} isActive={obj.isActive}/>
                    )
                }
            </div>
            
           
      </div>
    
    )
  }

  export default BodyDisplayFunction;