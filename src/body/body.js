import React from 'react';
import Para from './para.js'
import Paras from './paras.js'
import List from './list.js'
import Tools from './tools.js';

const arr=[
        
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
    return(
      <div id="myId" className='class' >
            <Paras/>
            <Para/>
            <Tools>
                <div>
                    {
                        arr.map((obj,index)=><List key={index} header={obj.header} desc={obj.description} item1={obj.item1} item2={obj.item2} isActive={obj.isActive}/>
                        )
                    }
                </div>
             </Tools>    
      </div>   
    )
  }

  export default BodyDisplayFunction;