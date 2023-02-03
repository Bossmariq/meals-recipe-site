import { useState } from "react";
import { useGlobalContext } from '../Context';

const Search = () => {

  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  }
  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input className="form-input" typeof="text" value={text} placeholder="Type in meal name" onChange={handleChange} />
        <button className="btn" typeof="submit">Search</button>
        <button className="btn btn-hipster" typeof="button" onClick={handleRandomMeal}>Surprise Me!</button>
      </form>
    </header>
  )
}

export default Search;