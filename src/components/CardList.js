import React, { useState, useEffect } from "react";
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapPin, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas, faMapPin)

function CardList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setIsLoaded(true);
        setCharacter(response.data.results);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    const chunkedCharacter = [];
    for (let i = 0; i < character.length; i += 5) {
      chunkedCharacter.push(character.slice(i, i + 5));
    }

    return (
      <div className="container">
        <div className="columns is-flex is-justify-content-center">
          {chunkedCharacter.map((chunk, index) => (
            <ul key={index}>
              {chunk.map((character) => (
                <div className="card" key={character.id}>
                  <img src={character.image} alt={character.name} style={{ width: '100%' }} />
                  <div className="container">
                    <h4><b>{character.name} {character.status === 'Dead' ? <FontAwesomeIcon icon="fa-solid fa-cross" /> : ''}</b></h4>
                    <p><FontAwesomeIcon icon="fa-solid fa-map-pin" />{character.location.name.slice(0, 50)}{character.location.name.length > 50 ? '...' : ''}</p>
                    {/* <button onClick={() => showDetails(character.id)}><link to={`/details?id=${key}`}/>Détails</button> */}
                  </div>
                </div>
              ))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;

