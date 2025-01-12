import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded? 'Data loaded!' : 'Loading...'}</h1>
                {this.state.isLoggedIn? (
                    <div> 
                        <p>
                            Welcome to the site. Please complete the steps below. 
                        </p>
                        <ol>
                            <li>Confirm Email</li>
                            <li>Complete Your Profile</li>
                            <li>Subscribe to the Newsletter</li>
                        </ol>
                    </div>
                ) : (<p>Please sign in</p>)}
            </div>
        )
    }
}

export default ConditionalRenderingClass