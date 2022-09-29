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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000)
    }
  componentWillUnmount() {  
    clearInterval(this.timerID);
    }
  
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root3'));
root.render(<Clock />);

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

function Application() {
  return (
    <div>
      <Clock /> 
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root7')
);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Cette liaison est nécéssaire afin de permettre
    // l'utilisation de `this` dans la fonction de rappel.
    this.handleClick = this.handleClick.bind(this);  }

  handleClick() {
    this.setState(state => ({
    isToggleOn: !state.isToggleOn    }));
    }
  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON_F' : 'OFF_F'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root8')
);

function FUserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function FGuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}

function FGreeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <FUserGreeting />;
    }
    return <FGuestGreeting />;}
ReactDOM.render(
  // Essayez de changer ça vers isLoggedIn={true} :
  <FGreeting isLoggedIn={true} />,
  document.getElementById('root9')
  );


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
          {button} 
        </div>
    );
  }
  }
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
    
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root10')
  );

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Bonjour !</h1>
      {unreadMessages.length > 0 && 
             <h2>Vous avez {unreadMessages.length} message(s) non-lu(s). </h2> 
      }
      </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
//const messages = ['msg1'];
//const messages = [];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root11')
);