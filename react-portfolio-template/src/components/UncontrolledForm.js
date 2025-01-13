import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef(); //allows react to access the value of the name input at any time, while allowing the DOM to manage it's value too (removes need for event handlers and state updates).
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
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
                            id='id-name' 
                            name='name' 
                            type='text'
                            // defaultValue ='John Smith'
                            ref={this.inputName}
                        />
                    </div>

                    <div>
                        <label htmlFor='id-category'>
                            Query Category:
                        </label>

                        <select id='id-category' name='category' ref={this.inputCategory}>
                            <option value='website'>Website Issue</option>
                            <option value='order'>Order Issue</option>
                            <option value='general'>General Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea id='id-comments' name='comments' ref={this.inputComments}/>
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

export default UncontrolledForm