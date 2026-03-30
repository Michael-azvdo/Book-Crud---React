function BookForm({ title, author, setTitle, setAuthor, onSubmit, editing }) {

  // Evita recarregar a página ao apertar ENTER
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>

      {/* Campo título */}
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Campo autor */}
      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      {/* Botão dinâmico */}
      <button type="submit">
        {editing ? "Atualizar" : "Adicionar"}
      </button>

    </form>
  );
}

export default BookForm;