import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) { // 'props' added here for best practice so that any props from 'component' above are passed.
        super(props); // Must always be called. This ensures that the constructor for the parent class, importantly React.Component, is also called.
        this.state = {
            //initial state that is mutable
            introduction: "Hello!",
            buttonText: "Exit",
            clickCounter: 0,
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    clickCounterIncrementer() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                clickCounter : prevState.clickCounter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.name}, {this.props.greeting}
                    </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.clickCounterIncrementer()}>Increment</button>
                <p>You've clicked the increment button {this.state.clickCounter} times.</p>
            </div>
        )
    }
}

export default StatefulGreeting;