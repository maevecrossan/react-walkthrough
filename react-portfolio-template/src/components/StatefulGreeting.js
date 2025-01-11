import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) { // 'props' added here for best practice so that any props from 'component' above are passed.
        super(props); // Must always be called. This ensures that the constructor for the parent class, importantly React.Component, is also called.
        this.state = {
            //initial state that is mutable
            introduction: "Hello!",
            buttonText: "Exit",
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;