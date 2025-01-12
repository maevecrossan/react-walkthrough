import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div> {
            props.isLoggedIn ? (
                <div>
                    <p>
                        Welcome to the site. Please complete the steps below.
                    </p>
                    <ol>
                        <li>Confirm Email</li>
                        <li>Complete Your Profile</li>
                        <li>Subscribe to the Newsletter</li>
                    </ol>
                    <button onClick={props.handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <p>Please sign in</p>
                    <button onClick={props.handleSignIn}>Sign in</button>
                </div>
            )
        } </div>
    )
}

export default MethodsAsPropsChild
