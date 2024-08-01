function Search() {
  return (
    <>
      <div class="search">
        <input
          type="text"
          placeholder="enter city name"
          spellcheck="false"
        ></input>
        <button>
          <img src="search.png"></img>
        </button>
      </div>
    </>
  );
}

export default Search;
