import React from "react";
import  ReactDOM  from "react-dom";

// React Element
const heading = React.createElement('h1' , 
{
    id : 'heading' 
} , 'Hello World ! with React'); 
// it nothing buts returns object
console.log(heading)


const Title = ()=>{
    return (
        <h1>Bro React</h1>
    )
}

// React Functinal component 
const HeadingComponent = ()=>{
    return (
        <>
          <Title/>
         <h1>Functional Component Lets Rocks</h1>
        </>
      
    )
}

// JSX 
 // const jsxElement = <h1>Hello React !</h1>
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <HeadingComponent/>);