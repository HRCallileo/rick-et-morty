import React from 'react';
import '../styles/App.css';
import logo from '../assets/logo-rick-et-morty.png';
import CardList from './CardList.js';
import '../styles/card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import Card from './Card';

library.add(fas, faHtml5, faCss3Alt, faJs);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rick et Morty : apprentissage sans prise de tête</h1>
        <FontAwesomeIcon icon={faHtml5} /><FontAwesomeIcon icon={faCss3Alt} /><FontAwesomeIcon icon={faJs} />
      </header>
      <main>
        <div className='CardList'>
          {/* <CardList /> */}
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;

