function BookItem({ book, onEdit, onDelete }) {
  return (
    <li>

      {/* Texto */}
      <span>
        {book.title} - {book.author}
      </span>

      {/* Botões */}
      <div>
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
      </div>

    </li>
  );
}

export default BookItem;