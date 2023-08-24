import React from 'react';

class Tools extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"React"
        };
    }
    change=() =>{
        this.setState(
            {
                data:"React Framework"
            }
        );
    }
    render(){
        const{children,onAction}=this.props;
        return (
            <div>
                <div className ="list-header">
                    <select onChange={onAction} name ="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non Active</option>
                    </select>
                </div>
                <div>
                    {children}
                </div>
                <div onClick={this.change} className='list-footer'>
                     //use this.change.bind(this) is it is passing to another component
                    some info of {this.state.data}
                </div>
            </div>
        )
    }
} 

export default Tools;