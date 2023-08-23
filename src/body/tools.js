import React from 'react';

class Tools extends React.Component{
    render(){
        const{children}=this.props;
        return (
            <div>
                <div className ="list-header">
                    <select name ="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non Active</option>
                    </select>
                </div>
                <div>
                    {children}
                </div>
                <div className='list-footer'>
                    some info
                </div>
            </div>
        )
    }
} 

export default Tools;