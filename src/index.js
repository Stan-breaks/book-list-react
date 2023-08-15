
import React from "react";
import  ReactDOM from "react-dom/client";
import './index.css'
import {books} from './books'
import{Book} from './Book';
const Booklist=()=>{

    return (
      <section>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    );
}

// Rendering
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)
