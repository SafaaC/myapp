import React from 'react';


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
            <div className="list-item">
                <span>{this.props.item}</span>
            </div>
        </div>
        
    )
   } 
}

export default List;