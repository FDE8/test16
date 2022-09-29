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

function Welcome(props){  
  return <h1>Bonjour, {props.name}</h1>;
}

const element4 = <Welcome name = 'Sara' />;

ReactDOM.render(
  element4,
  document.getElementById('root4')
);

function App() {
  return (
    <div>
      <Welcome name="Nathalie" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root5')
);
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}    />  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user ={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'test numéro 6 :)!',
  author: {
    name: 'florent',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root6')
);