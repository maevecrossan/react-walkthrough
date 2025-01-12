import React from 'react'

export default function ConditionalRenderingFunctional(props) {
    return (
        <div>
            <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
        </div>
    )
}
