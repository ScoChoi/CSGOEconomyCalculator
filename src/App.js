import React from 'react';
import './App.css';
import Side from "./Side"
import Calculator from "./Calculator"

  class Result extends React.Component {
    render() {
      return (
        <div class="resultBox">
          <h3>
            Expected Enemy Buy for round {this.props.round_count}
          </h3>
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
        round: 1,
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
    } else if ((this.state.round_outcome == "lose" || (this.state.round_outcome == "bomb" && this.state.enemy_side == "t")) && this.state.loss_bonus > 0) {
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
        {
          (this.state.round > 1)?
          <Result
          loss_bonus={this.state.loss_bonus}
          round_count={this.state.round} 
          enemy_deaths={this.state.enemy_deaths}
          round_outcome={this.state.round_outcome}
          enemy_buy={this.state.enemy_buy}
          team_deaths={this.state.team_deaths}
          />
        :null
        }
      </div>
    );
  }
}
export default App;
