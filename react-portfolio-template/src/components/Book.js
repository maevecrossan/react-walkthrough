import React from 'react'

function Book(props) { //Receives the data as a prop and uses it.
    const book = props.book
    return (
        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}

export default Book
