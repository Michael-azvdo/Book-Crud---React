import { useState, useEffect } from "react";
import "./App.css";

// Importa componentes
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {

  // 🔹 Carrega dados do localStorage ao iniciar
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔹 Campos do formulário
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // 🔹 Controle de edição
  const [editingId, setEditingId] = useState(null);

  // 🔹 Salva automaticamente quando mudar
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // 🔹 Adicionar ou atualizar livro
  function addOrUpdateBook() {
    if (!title || !author) return;

    if (editingId !== null) {
      // Atualiza livro existente
      const updated = books.map((book) =>
        book.id === editingId ? { ...book, title, author } : book
      );
      setBooks(updated);
      setEditingId(null);
    } else {
      // Cria novo livro com ID único
      const newBook = {
        id: Date.now(),
        title,
        author,
      };
      setBooks([...books, newBook]);
    }

    // Limpa campos
    setTitle("");
    setAuthor("");
  }

  // 🔹 Excluir livro
  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  // 🔹 Editar livro
  function editBook(id) {
    const book = books.find((b) => b.id === id);
    setTitle(book.title);
    setAuthor(book.author);
    setEditingId(id);
  }

  return (
    <div className="container">

      <h1>📚 CRUD de Livros</h1>

      {/* Contador */}
      <p className="counter">
        Total de livros: {books.length}
      </p>

      {/* Formulário */}
      <BookForm
        title={title}
        author={author}
        setTitle={setTitle}
        setAuthor={setAuthor}
        onSubmit={addOrUpdateBook}
        editing={editingId !== null}
      />

      {/* Lista */}
      <BookList
        books={books}
        onEdit={editBook}
        onDelete={deleteBook}
      />

    </div>
  );
}

export default App;