import BookItem from "./BookItem";

function BookList({ books, onEdit, onDelete }) {

  // Se não tiver livros
  if (books.length === 0) {
    return <p className="empty">Nenhum livro cadastrado 📭</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onEdit={() => onEdit(book.id)}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </ul>
  );
}

export default BookList;