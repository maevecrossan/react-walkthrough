import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1> Hello, {props.name}! I see you're {props.age} years old, {props.greeting} </h1>
}

export default FunctionalGreetingWithProps 
// exports the function so it can be imported and used elsewhere in our app

/* 'default' allows you to import the function under a different name if necessary, 
* despite the fact that it breaks convention.
*/

/* This functio
*   - 
*   - 
*   - 
*/
