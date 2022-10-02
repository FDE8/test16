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

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Attention !
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Masquer' : 'Afficher'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root12')
);

const numbers1 = [1, 2, 3, 4, 5];
const listItems = numbers1.map((number) =>
  <li key={number.toString()} >
    {number}
  </li>
  );

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root14')
);

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>  );
  return (
    <ul>{listItems}</ul>  );
}

const numbers = [0,1, 2, 3, 4, 5, 8];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root15')
);

function ListItem(props) {
  // Correct ! Pas la peine de spécifier la clé ici :
  return <li>{props.value}</li>;
}

function NumberList3(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct ! La clé doit être spécifiée dans le tableau.
    <ListItem key={number.toString()} value={number} />  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers3 = [1000, 200, 300, 400, 500];
ReactDOM.render(
  <NumberList3 numbers={numbers3} />,
  document.getElementById('root16')
);

function Blog(props) {
  const sidebar = (<ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>    
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}      <hr />
      {content}    </div>
  );
}

const posts = [
  {id: 1, title: 'Bonjour, monde', content: 'Bienvenue sur la doc de React !'},
  {id: 2, title: 'Installation', content: 'Vous pouvez installer React depuis npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root17')
);

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const root18 = ReactDOM.createRoot(document.getElementById('root18'));
root18.render(<NameForm />);

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Écrivez un essai à propos de votre élément du DOM préféré' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('Un essai a été envoyé : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />        </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

const root19 = ReactDOM.createRoot(document.getElementById('root19'));
root19.render(<EssayForm />);

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('Votre parfum favori est : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choisissez votre parfum favori :
                    <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Pamplemousse</option>
                        <option value="lime">Citron vert</option>
                        <option value="coconut">Noix de coco</option>
                        <option value="mango">Mangue</option>
                    </select>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}
const root20 = ReactDOM.createRoot(document.getElementById('root20'));
root20.render(<FlavorForm />);

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Participe :
                    <input
                        name="isGoing" type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Nombre d'invités :
                    <input
                        name="numberOfGuests" type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

const root21 = ReactDOM.createRoot(document.getElementById('root21'));
root21.render(<Reservation />);

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

const root22 = ReactDOM.createRoot(document.getElementById('root22'));
root22.render(<Calculator />);

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

const root23 = ReactDOM.createRoot(document.getElementById('root23'));
root23.render(<WelcomeDialog />);

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App24() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

const root24 = ReactDOM.createRoot(document.getElementById('root24'));
root24.render(<App24 />);