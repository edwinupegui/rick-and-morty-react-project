import React, { useState, useEffect } from 'react'
import './characters.css'

const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode);
    //test
  }


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <>
      <body className={`body-${darkMode}`}>
        <header className={`header-${darkMode}`}>
          <h1>Rick and Morty with React</h1>
          <button type="button" onClick={handleClick}>{darkMode ? 'Light-Mode' : 'Dark-Mode'}</button>
          {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button> */}
        </header>

        <div key={characters.id} className="container">

          {characters.map(character => (
            <div className={`characters-${darkMode}`}>
              <img src={character.image} alt={character.name}></img>
              <h2>{character.name}</h2>
              <h5>{character.status}</h5>
              <h5>{character.species}</h5>
              <h5>{character.gender}</h5>
              <h5>Location: {character.location.name}</h5>
            </div>
          ))}
        </div>

      </body>

    </>



  )
}

export default Characters