import React from 'react';
import './Logged.js';
import './NotLogged.js';
import Logged from './Logged.js';
import NotLogged from './NotLogged.js';
function Conditional({isLoggedIn}){
    // let number=8;
    // return(
        
    //     <div>
    //         {
    //             number>0? (<p>Positive</p>) : number<0 ?(<p>Negative</p>) : (<p>Zero</p>)
    //         }
    //     </div>
    // );
    return(
        
        <div>
            {
                isLoggedIn?   <Logged/> :<NotLogged/>
            }
        </div>
    );
}
export default Conditional;