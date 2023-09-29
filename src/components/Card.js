import React from "react";

import { useParams } from 'react-router-dom';

import axios from "axios";
 

import { library } from '@fortawesome/fontawesome-svg-core'

 

import { faMapPin, fas } from '@fortawesome/free-solid-svg-icons'

 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

library.add(fas, faMapPin)

 

 

 

function Card() {

 

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

 

 

 

    function Card() {
        let { id } = useParams(); // Récupère l'ID depuis l'URL
    
        return (
            <div>
                {chunkedCharacter.map((character, index) => (
                    <div className="columns" key={index}>
                        <div className="column">
                            <img src={character.image} alt={character.name} style={{ width: '100%' }} />
                        </div>
                        <div className="column">
                            <h4><b>{character.name} {character.status === 'Dead' ? <FontAwesomeIcon icon={['fa', 'cross']} /> : ''}</b></h4>
                            <p><FontAwesomeIcon icon={['fa', 'map-pin']} />{character.location.name.slice(0, 50)}{character.location.name.length > 50 ? '...' : ''}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
  }
}
    export default Card;