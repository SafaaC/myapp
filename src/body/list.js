import React from 'react';
import ListItem from './listItem';

class List extends React.Component{
   render(){

    const props= this.props; //should use the same word this.props
    return(
        <div className="list">
            <div className="list-header">
                <h3>{props.header}</h3>
            </div>
            <div className="list-desc">
                <p>{props.desc}</p>
            </div>
            <ListItem item1={props.item1} item2={props.item2}/>
        </div>
        
    )
   } 
}

export default List;