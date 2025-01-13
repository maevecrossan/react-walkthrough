import React, {Component} from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log('Child Constructor called')
        super(props)
        this.state = {
            greeting: 'Child Hello!'
        }
    }

    updateGreeting = () => {
        console.log('Child Update greeting called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Child Hello!' ? 'Child Goodbye' : 'Child Hello!'
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Child Component updated!')
        // good place to run code you want to happen each time the component is updated.
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting){
            console.log('Parent greeting has changed!')
        }
    }

    render() {
        console.log('Child Render method called')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Child Update Greeting</button>
            </div>
        )
    }
}


export default LifeCyclesCDUChild
