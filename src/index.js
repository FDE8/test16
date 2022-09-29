import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Clarisse Agbegnenou';
const element = <h1>Bonjour, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Kylian',
  lastName: 'Mbappé'
};

const element2 = (
  <div>
    <h1>Bonjour, {formatName(user)} !  </h1>
    <h1>Bonjour, {name}</h1>
  </div>
);

ReactDOM.render(
 
  element2,
  document.getElementById('root')
);




function tick() {
  const element3 = (
    <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element3, document.getElementById('root3'));}

setInterval(tick, 1000);

