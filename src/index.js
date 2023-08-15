
import React from "react";
import  ReactDOM from "react-dom/client";
import './index.css'
 

const books=[{
  title:'THE RABBIT HITCH' ,
  author : "Jordan Moore" ,
  img:"https://m.media-amazon.com/images/P/0593467876.01._SCLZZZZZZZ_SX500_.jpg",
  id:1
},{
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
  img: "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
  id:2
}];

const Book=(props)=>{
  const {id ,img,title,author,getBook}=props
  return (
    <div key={id}>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <h4>{author}</h4>
      <button>See more</button>
    </div>
  );
}
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
