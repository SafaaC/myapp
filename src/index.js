import React from 'react';
import ReactDOM from 'react-dom/client';
import BodyDisplayFunction from './body/body.js'
import Nav from './body/nav.js';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <div>
        <div className="header">
          <Nav/>
        </div>
        <div className="body">
          <BodyDisplayFunction/>     {/* {bodyDisplayFunction()} */}
        </div>
    </div>
    
  );


// const styleObj1={
//   color:"white",
//   backgroundColor:"black",
//   padding:"5px",
// }
// const onClick=()=> console.log("clicked");
// const arr=["Item1" , "Item2" ,"Item3"];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div id="myId" className='class' style={styleObj1}>
//           <p onClick={onClick}>Since class is a keyword use className as an attribute in html tag.for the same reason use htmlFor
//           instead of for attribute.For giving inline style to tag , make an object and define styles as key: value pair
//           where the key should not have - or space use Camel cases(background-color=backgroundColor),and 
//           pass the object within curely braces</p>
//           <p onClick={function(){
//             console.log("clicked");
//             console.log("para clicked");
//           }}>we can pass only a sigle statement in curely braces</p>
//           {
//             arr.map((item,index)=><label key={index}> {item} </label>)
//           }
//           <p>It is difficult to write 1000s of line in a single file. so seperated them into different file,
//              with the support od react in the form of components.
//              Props are arguments passed into React components.Props are passed to components via HTML attributes.
//           </p>
//     </div>
//     JSX statement is converted to js as
//     React.createElement("div",
//             {id:"myid1",
//              className:'class',
//              style:(styleObj1)
//             },
//             "TEXT"
//     )
// );
