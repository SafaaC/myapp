import React from 'react';
import List from './list.js'

function SimpleList(props){
    const {data,onAction}=props;
    return(
        <div>
                    {
                        data.map((obj,index)=>
                        <List 
                                key={index} 
                                header={obj.header} 
                                desc={obj.description} 
                                item1={obj.item1} 
                                item2={obj.item2} 
                                isActive={obj.isActive}
                                onDelete={()=>onAction(index)}
                                />
                        )
                    }
                </div>
    );
}
export default SimpleList;