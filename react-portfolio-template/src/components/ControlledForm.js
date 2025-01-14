import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', // Allows react to keep track of the 'name'. Adding this and the 'value' attribute to the input takes away control from the DOM and allows the input to work independently i.e. wont refresh the page on submit. 
            category: 'website',
            comments: '',
        }
    }

    // handleNameChange = (event) => {
    //     let newValue = event.target.value
    //     this.setState({
    //         name: newValue
    //     })
    // } Refactored version below:

    //handleNameChange updates the state using the setState() method, giving the name property  the value of whatever was typed into the field.
    handleNameChange = (event) => {
        this.setState({ 
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({ 
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({ 
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault; // prevents default GET request and page refresh
    }

    render() {
        
    }
}

export default ControlledForm