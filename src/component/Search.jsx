function Search({ input, handleClick, handleInput }) {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <input
        className="border border-gray-300 p-2 rounded-md w-50 mr-5"
        type="text"
        placeholder="Busca tu contenido"
        value={input}
        onChange={handleInput}
      />
      <button
        className="bg-red-500 text-white px-3 py-1 mr-3 rounded"
        type="submit"
        onClick={handleClick}
      >
        Buscar
      </button>
    </div>
  );
}

export default Search;
