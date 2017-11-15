import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { } from 'bla'  <- Destructuring

class App extends Component {
  constructor(){
    super();

    //setup state
    this.state = {
      pizzaToppings: ["pepperoni", "cheese"],
      burgerToppings: ["bun", "burger", "ketchup"],
      color: 'red',
      isAwesome: true
    }
  }  

  handleClick(){
    var newAwesome = this.state.isAwesome;
    newAwesome = !newAwesome;

    var newColor = this.state.color;
    if(newColor === 'red'){
      newColor = 'green'
    } else {
      newColor = 'red'
    }

    var newState = {
      isAwesome: newAwesome,
      color: newColor,
      isTire: true
    }

    this.setState( newState )
  }

  render() {

    //Logic goes here between render and return
    var hello = <div>Hello..!</div>

    var jsxTopings = [];
    for (var i = 0; i < this.state.pizzaToppings.length; i++) {
      var topping = this.state.pizzaToppings[i];
      jsxTopings.push(<li>{topping}</li>)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h3 style={ { color: this.state.color, fontSize: 48 } }>HEY</h3>
          <button onClick={ (e)=> this.handleClick() }>Toggle Awesome</button>
        </header>
        {
          "Hey everyone"
        }
        {hello}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { jsxTopings }
        <Burger/>
      </div>
    );
  }
}

class Pizza extends Component {
  render() {
    return (
      <div>
        <li>Pepperoni</li>
        <li>Cheese</li>
        <li>Olives</li>
        <li>More cheese</li>
        <li>jalepenos</li>
      </div>
    )
  }
}

function Burger(){
  return (
     <div>
        <li>Beef</li>
        <li>Bun</li>
        <li>Ketchup</li>
        <li>Lettuce</li>
        <li>Tomatoe</li>
      </div>
  )
}

export default App;