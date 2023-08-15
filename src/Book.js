export const Book = (props) => {
  const { id, img, title, author } = props;
  return (
    <div key={id}>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <h4>{author}</h4>
      <button>See more</button>
    </div>
  );
};
