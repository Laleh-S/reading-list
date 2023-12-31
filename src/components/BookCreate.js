// This componet will show a form to our users with an input so we can add new books.
// createBook was passed from sharedContent function in books.js context component
import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() { 
    const [title, setTitle] = useState(''); // "title" state keeps trak of whatever user types in the <input> below.
    const { createBook } = useBooksContext();

    const handleChange = (event) => { // called whenever user changes or type inside the <input>. 
        setTitle(event.target.value)  // The 'event.target.value' used to figure out what user typed in.
    };
    
    // when user presses the enter key or "create button" inside the <input>, it automatically triggers the submit event on the form. 
    // we handle that event. Inside that eventHandler we call "createBook" and pass in the "title" we have been maintaining. 
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents automatic form submition.
        createBook(title);
        setTitle(''); // Clears the input text after submiting.
    };

    return (
        <div className="book-create">
            <h3>Add Your Book</h3>
            <form onSubmit={handleSubmit} >
                <label>Title </label>
                {/* When we make an <input>, we wire it up with 'value' & 'onChange' props */}
                <input className="input" onChange={handleChange} value={title} /> 
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate