
import React from "react";
import  ReactDOM from "react-dom/client";
import './index.css'
import {books} from './books'
import{Book} from './Book';
const Booklist=()=>{

    return (
      <section>
        <h1>Amazon best sellers</h1>
        {books.map((book,index ) => {
          return <Book {...book} number={index}  key={book.id} />;
        })}
      </section>
    );
}

// Rendering
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)
