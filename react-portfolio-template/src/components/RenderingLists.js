import React from "react";
import Book from "./Book";

function RenderingLists() {
    const bookList = ["to kill a mockingbird", "the great gatsby", "the catcher in the rye",];

    const books = [
        {
            title: "to kill a mockingbird",
            author: "harper lee",
            pages: 281
        }, {
            title: "the great gatsby",
            author: "f. scott fitzgerald",
            pages: 218
        }, {
            title: "the catcher in the rye",
            author: "j. d. salinger",
            pages: 234
        },
    ];
    return (
        <div> {
            bookList.map((book) => { // The RenderingLists component passes a prop named book to the <Book /> component.
                return <h2 key={book}>
                    {book}</h2>; // 'key' is needed and used by React to keep track of which elements need to be rerendered whenever a component is updated. We use the title here because they are all unique.
            })
        }
            <hr/> {
            books.map((book) => {
                return (
                    <div key={
                        book.title
                    }>
                        <h5>{
                            book.title
                        }</h5>
                        <p>{
                            book.author
                        }</p>
                        <p>{
                            book.pages
                        }</p>
                    </div>
                );
            })
        }
            <hr/> {
            books.map((book) => {
                return <Book key={
                        book.title
                    }
                    book={book}/>;
            })
        } </div>
    );
}

export default RenderingLists;
