import { useState } from "react";

function Search({ getClothes }) {
  let [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getClothes(input);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="searchBox">
        <input value={input} onChange={handleChange} />
        <button>Search</button>
        
      </form>
    {/* //  console.log({input}) */}
    </div>
  );
  
}

export default Search;
