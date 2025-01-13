import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'


// componentDidMount is the method called right after the component is first added to the DOM and will not be called again unless the component is unmounted.
// Great for making API calls.
export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)

        this.state = {
            data: 'loading'
        }
    }

    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched')
            this.setState({
                data: 'loaded'
            })
        }, 3000)
    }

    componentDidMount() { // won't be called until all children are mounted.
        console.log('Component mounted')
        this.getData()
    }

    render() {
        console.log('Render method called')
        return (
            <div>
                <h1>
                    {this.state.data}
                    <LifeCyclesCDMChild />
                </h1>
            </div>
        )
    }
}

export default LifeCyclesCDM