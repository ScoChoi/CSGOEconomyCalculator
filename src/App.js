import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
//import Side from "./side"
import calculator from "./calculator"

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
class Calculator extends React.Component {
    render() {
      return (
        <div class="calcBox">
          <div class="round">
            <h2>
              {this.props.round_count}
            </h2>
          </div>
          <div class="dropdown">
           <button class="dropbtn" data-toggle="dropdown">Enemy Deaths</button>
            <div class="dropdown-content">
              <a href="#" id="0" onClick={() => this.props.e_deaths("0")}>0</a>
              <a href="#" id="1" onClick={() => this.props.e_deaths("1")}>1</a>
              <a href="#" id="2" onClick={() => this.props.e_deaths("2")}>2</a>
              <a href="#" id="3" onClick={() => this.props.e_deaths("3")}>3</a>
              <a href="#" id="4" onClick={() => this.props.e_deaths("4")}>4</a>
              <a href="#" id="5" onClick={() => this.props.e_deaths("5")}>5</a>
          </div>
        </div>
          <button 
            class="submit"
            onClick={() => this.props.submit()}
          >
            Submit
          </button>
        </div>
      );
    }
  }
  
class Side extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      return (
        <div>
          <h1> Choose Your Starting Side </h1>
          <button 
            class="tsidebutton" 
            onClick={() => this.props.tside()}
          />
          <button 
            class="ctsidebutton"
            onClick={() => this.props.ctside()}
          />
        </div>
      );
    }
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        enemy_side: null,
        show_side: true,
        show_calculator: false,
        round: 0,
        loss_bonus: 0,
        enemy_deaths: 0,
    }
  }
  
  tsidebutton()
  {
    this.setState({
      enemy_side: "ct",
      show_side: false,
      show_calculator: true
    })
  }
  
  ctsidebutton()
  {
    this.setState({
      enemy_side: "t",
      show_side: false,
      show_calculator: true
    })
  }

  submitbutton()
  {
    this.setState({
      round: this.state.round + 1
    })
    var toUntoggle = document.getElementsByClassName("checked")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked")
    }
  }

  enemy_deaths(num_deaths)
  {
    this.setState({
      enemy_deaths: num_deaths
    })
    var toUntoggle = document.getElementsByClassName("checked")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked")
    }
    var toToggle = document.getElementById(num_deaths);
    toToggle.classList.toggle("checked")
  }

  render() {
     return (
      <div>
        <html></html>
        {
          this.state.show_side?
          <Side tside={this.tsidebutton.bind(this)} ctside={this.ctsidebutton.bind(this)} />
        :null
        }
        {
          this.state.show_calculator?
          <Calculator round_count={this.state.round} submit={this.submitbutton.bind(this)} e_deaths={this.enemy_deaths.bind(this)} />
        :null
        }
      </div>
    );
  }
}
export default App;
