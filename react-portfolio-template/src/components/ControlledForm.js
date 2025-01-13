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
        return (
            <div>
                <h2>
                    Please fill out the form below:
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='id-name'>
                            Your Name:
                        </label>

                        <input 
                            value={this.state.name} //we are saying we want 'name' to be the same as whatever the value of 'name' above is.
                            onChange={this.handleNameChange} // called each time the form changes i.e. someone types something in.
                            id='id-name' 
                            name='name' 
                            type='text'
                        />
                    </div>

                    <div>
                        <label htmlFor='id-category'>
                            Query Category:
                        </label>

                        <select id='id-category' name='category' value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value='website' >Website Issue</option>
                            <option value='order'>Order Issue</option>
                            <option value='general'>General Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea id='id-comments' name='comments' value={this.state.comments} onChange={this.handleCommentsChange}/>
                    </div>

                    <input 
                        type='submit' 
                        value='Submit'
                    />
                </form>
            </div>
        )
    }
}

export default ControlledForm