import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/main.scss';

import generateJoke from '../controllers/generateJoke.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: 'none',
      loggedIn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }
  loginUser(event) {
    this.setState({
      currentUser: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div id="CCCCheader">
          <h1>Cohort Coding Crew Calculator</h1>
        </div>
        <div>
          <Welcome id="welcome" />
        </div>
        <div>
          <LogInOrAdder id="loginoradder" loggedIn={this.state.loggedIn} />
          {/* <LogInOrList /> */}
        </div>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    console.log('IN RENDER');
    return (
      <section>
        <div id="welcome">
          <p>
            Welcome to the <strong>Cohort Coding Crew Calculator</strong>! The
            CCCC is the best, and only, tool available for doing the hard work
            of rating your cohort mates for the purpose of choosing partners for
            your OSP.
          </p>
          <p>
            Using our unique and patented algorithims, we take the guesswork out
            of selecting your ideal team!
          </p>
          <p>
            After each pair programming experience, simply fill out a brief form
            rating your partner on a variety of skills. The CCCC will compile a
            list with your ideal, and less than ideal, team mates.
          </p>
        </div>
      </section>
    );
  }
}

class LogInOrAdder extends Component {
  render() {
    console.log('PASSED STATE TO LIOL', this.props.loggedIn);
    if (this.props.loggedIn === false) {
      return (
        <div>
          <LogIn id="logIn" />
        </div>
      );
    } else {
      return (
        <div>
          <Adder id="adder" />
        </div>
      );
    }
  }
}

class LogIn extends Component {
  render() {
    return (
      <div>
        <div id="login">
          <p>login to continue.</p>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={this.props.currentUser}
            onChange={this.loginUser.bind(this)}
          />
          <input type="password" id="password" placeholder="password" />
          <button id="loginbutton">login</button>
        </div>
        <div id="newUser">
          <p>Don't have an account yet? Create a new account below.</p>
          <input type="text" id="newusername" placeholder="username" />
          <input type="password" id="newpassword" placeholder="password" />
          <input
            type="password"
            id="newpasswordcheck"
            placeholder="password again"
          />
          <button id="createaccountbutton">Create Account</button>
        </div>
      </div>
    );
  }
}

class Adder extends Component {
  render() {
    return (
      <div>
        <p>Click below to add and rate a new pair programming partner.</p>
        <button id="addpartner">Add a new Partner</button>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
