import React from 'react';
import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const styleObj={
  color:"white",
  backgroundColor:"black",
  padding:"5px"

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <div id="myId" className='class' style={styleObj}>
    //       Since class is a keyword use className as an attribute in html tag.for the same reason use htmlFor
    //       instead of for attribute.For giving inline style to tag , make an object and define styles as key: value pair
    //       where the key should not have - or space use Camel cases(background-color=backgroundColor),and 
    //       pass the object within curely braces
    // </div>
    // JSX statement is converted to js as
    React.createElement("div",
            {id:"myid1",
             className:'class',
             style:(styleObj)
            },
            "TEXT"
    )
);
