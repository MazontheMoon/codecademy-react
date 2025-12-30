import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals';

//container variables
const container = document.getElementById('app');
const root = createRoot(container);
const showBackground = true;
const background = <img src='/images/ocean.jpg'
alt='ocean'
className="background"/>;
const title = "";

//populate animals array
const images = [];
for (const animal in animals){
  images.push(<img key={animal}
    className="animal"
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role="button"
    onClick={displayFact} />);
};

//handle click function
function displayFact(e){
  let name = e.target.alt;
  //get random fact 
  let randomNum = Math.floor(Math.random() * 3);
  let factoid = animals[name].facts[randomNum];
  document.getElementById('fact').innerHTML = factoid;

};
const animalFacts = (
  <div>
  {showBackground && background}
    <h1>{title || "Click an animal for a fun fact"}</h1>
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
  );

root.render(animalFacts);


