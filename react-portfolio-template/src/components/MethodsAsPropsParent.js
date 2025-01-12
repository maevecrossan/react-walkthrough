import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'
//import UserData from './UserData'

export class MethodsAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn} //passes function down to the child, doesn't call it yet.
                    handleSignOut={this.handleSignOut}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent