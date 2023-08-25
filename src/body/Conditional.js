import React from 'react';
function Conditional(){
    let number=8;
    return(
        
        <div>
            {
                number>0? (<p>Positive</p>) : number<0 ?(<p>Negative</p>) : (<p>Zero</p>)
            }
        </div>
    );
}
export default Conditional;