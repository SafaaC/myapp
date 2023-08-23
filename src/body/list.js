import React from 'react';
import ListItem from './listItem';

class List extends React.Component{
   render(){
    return(
        <div className="list">
            <div className="list-header">
                <h3>{this.props.header}</h3>
            </div>
            <div className="list-desc">
                <p>{this.props.desc}</p>
            </div>
            <ListItem item1={this.props.item1} item2={this.props.item2}/>
        </div>
        
    )
   } 
}

export default List;