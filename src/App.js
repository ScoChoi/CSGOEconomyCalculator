import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
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
          <div class="loss_bonus">
            Enemy Loss Bonus:
            {
            (this.props.loss_bonus == 1)?
            <div class="lb1" />
            :null
            }
            {(this.props.loss_bonus == 2)?
            <div class="lb1" />
            :null 
            }
            {(this.props.loss_bonus == 2)?
            <div class="lb2" />
            :null 
            }
            {
            (this.props.loss_bonus == 3)?
            <div class="lb1" />
            :null
            }
            {(this.props.loss_bonus == 3)?
            <div class="lb2" />
            :null 
            }
            {(this.props.loss_bonus == 3)?
            <div class="lb3" />
            :null 
            }
            {(this.props.loss_bonus == 4)?
            <div class="lb1" />
            :null 
            }
            {
            (this.props.loss_bonus == 4)?
            <div class="lb2" />
            :null
            }
            {(this.props.loss_bonus == 4)?
            <div class="lb3" />
            :null 
            }
            {(this.props.loss_bonus == 4)?
            <div class="lb4" />
            :null 
            }

          </div>
          <div class="container">
            <div class="variable">
                <button class="tDeaths">Team Deaths</button>
                  <div class="v-content">
                    <a id="0t" onClick={() => this.props.t_deaths("01")}>0</a>
                    <a id="1t" onClick={() => this.props.t_deaths("1t")}>1</a>
                    <a id="2t" onClick={() => this.props.t_deaths("2t")}>2</a>
                    <a id="3t" onClick={() => this.props.t_deaths("3t")}>3</a>
                    <a id="4t" onClick={() => this.props.t_deaths("4t")}>4</a>
                    <a id="5t" onClick={() => this.props.t_deaths("5t")}>5</a>
                  </div>
              </div>

              <div class="variable">
                <button class="eDeaths">Enemy Deaths</button>
                  <div class="v-content">
                    <a id="0e" onClick={() => this.props.e_deaths("0e")}>0</a>
                    <a id="1e" onClick={() => this.props.e_deaths("1e")}>1</a>
                    <a id="2e" onClick={() => this.props.e_deaths("2e")}>2</a>
                    <a id="3e" onClick={() => this.props.e_deaths("3e")}>3</a>
                    <a id="4e" onClick={() => this.props.e_deaths("4e")}>4</a>
                    <a id="5e" onClick={() => this.props.e_deaths("5e")}>5</a>
                  </div>
              </div>
            
              <div class="variable">
                <button class="eBuy">Enemy Buy</button>
                  <div class="v-content">
                    <a id="save" onClick={() => this.props.e_buy("save")}>Save</a>
                    <a id="force" onClick={() => this.props.e_buy("force")}>Force</a>
                    <a id="half_buy" onClick={() => this.props.e_buy("half_buy")}>Half Buy</a>
                    <a id="full_buy" onClick={() => this.props.e_buy("full_buy")}>Full Buy</a>
                  </div>
              </div>

              <div class="variable">
                <button class="rOutcome">Round Outcome</button>
                  <div class="v-content">
                    <a id="bomb" onClick={() => this.props.outcome("bomb")}>Bomb Explodes</a>
                    <a id="win" onClick={() => this.props.outcome("win")}>Win</a>
                    <a id="lose" onClick={() => this.props.outcome("lose")}>Lose</a>
                  </div>
              </div>
          </div>
          {
            !(this.props.round_count == 30)?
            <button 
            class="submit"
            onClick={() => this.props.submit()}
            >
            Submit
            </button>
            :null
            }
        
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
        round_outcome: null,
        enemy_buy: null,
        team_deaths: 0,
    }
  }

  roundoutcome(outcome)
  {
    this.setState({
      round_outcome: outcome
    })
    var toUntoggle = document.getElementsByClassName("checked_round_outcome")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_round_outcome")
    }
    var toToggle = document.getElementById(outcome);
    toToggle.classList.toggle("checked_round_outcome")
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

  enemy_deaths(num_deaths)
  {
    this.setState({
      enemy_deaths: parseInt(num_deaths)
    })
    var toUntoggle = document.getElementsByClassName("checked_enemy_deaths")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_enemy_deaths")
    }
    var toToggle = document.getElementById(num_deaths);
    toToggle.classList.toggle("checked_enemy_deaths")
  }

  team_deaths(num_deaths)
  {
    this.setState({
      team_deaths: parseInt(num_deaths)
    })
    var toUntoggle = document.getElementsByClassName("checked_team_deaths")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_team_deaths")
    }
    var toToggle = document.getElementById(num_deaths);
    toToggle.classList.toggle("checked_team_deaths")
  }

  enemy_buy(buy_type)
  {
    this.setState({
      enemy_buy: buy_type
    })
    var toUntoggle = document.getElementsByClassName("checked_enemy_buy")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_enemy_buy")
    }
    var toToggle = document.getElementById(buy_type);
    toToggle.classList.toggle("checked_enemy_buy")
  }

  submitbutton()
  {
    this.setState({
      round: this.state.round + 1
    })
    if ((this.state.round_outcome == "win" || (this.state.round_outcome == "bomb" && this.state.enemy_side == "ct")) && this.state.loss_bonus < 4) {
      this.setState({
        loss_bonus: this.state.loss_bonus + 1
      })
    } else if ((this.state.round_outcome == "lose" || (this.state.round_outcome == "bomb" && this.state.enemy_side == "t")) && this.state.loss_bonus >1) {
      this.setState({
        loss_bonus: this.state.loss_bonus - 1
      })
    } 
    if (this.state.round == 15 && this.state.enemy_side == "ct") {
      this.setState({
        enemy_side: "t",
        loss_bonus: 0,
        enemy_deaths: 0,
        round_outcome: null,
        enemy_buy: null,
        team_deaths: 0,
      })
    } else if (this.state.round == 15 && this.state.enemy_side == "t") {
      this.setState({
        enemy_side: "ct",
        loss_bonus: 0,
        enemy_deaths: 0,
        round_outcome: null,
        enemy_buy: null,
        team_deaths: 0,
      })
    }
    var toUntoggle = document.getElementsByClassName("checked_enemy_buy")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_enemy_buy")
    }
    var toUntoggle = document.getElementsByClassName("checked_enemy_deaths")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_enemy_deaths")
    }
    var toUntoggle = document.getElementsByClassName("checked_round_outcome")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_round_outcome")
    }
    var toUntoggle = document.getElementsByClassName("checked_team_deaths")
    var i;
    for (i = 0; i < toUntoggle.length; i++) {
      toUntoggle[i].classList.toggle("checked_team_deaths")
    }
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
          <Calculator 
          loss_bonus={this.state.loss_bonus}
          round_count={this.state.round} 
          submit={this.submitbutton.bind(this)} 
          e_deaths={this.enemy_deaths.bind(this)}
          t_deaths={this.team_deaths.bind(this)}
          /*round_outcome={this.roundoutcome.bind(this)}*/
          outcome = {this.roundoutcome.bind(this)}
          e_buy={this.enemy_buy.bind(this)}
         />
        :null
        }
      </div>
    );
  }
}
export default App;
