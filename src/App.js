import React from 'react';
import './App.css';
import Side from "./Side";
import Calculator from "./Calculator";
import Result from "./Result";

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
        next_buy: null,
        enemy_money: 800,
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

    this.setState({
      enemy_money: calc_money(
        this.state.loss_bonus, 
        this.state.enemy_money, 
        this.state.team_deaths, 
        this.state.enemy_deaths, 
        this.state.round_outcome, 
        this.state.enemy_buy, 
        this.state.round, 
        this.state.enemy_side)
    })
    
    this.setState({
      next_buy: result(this.state.enemy_money, this.state.enemy_side, this.state.loss_bonus, this.state.round)
    })

    if (this.state.round == 15 && this.state.enemy_side == "ct") {
      this.setState({
        enemy_side: "t",
        loss_bonus: 0,
        enemy_deaths: 0,
        round_outcome: null,
        enemy_buy: null,
        team_deaths: 0,
        next_buy: null,
        enemy_money: 800
      })
    } else if (this.state.round == 15 && this.state.enemy_side == "t") {
      this.setState({
        enemy_side: "ct",
        loss_bonus: 0,
        enemy_deaths: 0,
        round_outcome: null,
        enemy_buy: null,
        team_deaths: 0,
        next_buy: null,
        enemy_money: 800,
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
          round_outcome={this.roundoutcome.bind(this)}
          // outcome = {this.roundoutcome.bind(this)}
          e_buy={this.enemy_buy.bind(this)}
         />
        :null
        }
        {
          (this.state.round > 1)?
          <Result
          round_count={this.state.round} 
          next_buy={this.state.next_buy}
          />
        :null
        }
      </div>
    );
  }
}
function result(enemy_money, enemy_side, loss_bonus, round)
{
  var nb = ""
  if (enemy_side == "ct") {
    if (round == 2 || round == 17) {
       if ( enemy_money > 16000 ) {
        nb = "SMG Buy"
      }
    } else {
      if (enemy_money >= 0 && enemy_money < 11000) {
        nb = "Save"
        if (loss_bonus == 0 || loss_bonus == 1) {
          nb = "Force"
        }
      } else if (enemy_money > 11000 && enemy_money < 18750) {
        nb = "Half Buy"
      } else if (enemy_money >= 18750) {
        nb = "Full Buy"
      } else {
        nb = "This shouldn't happen"
      }
      }
  } else {
    if (round == 2 || round == 17) {
      if ( enemy_money > 16000 ) {
        nb = "SMG Buy"
      }
    } else {
      if (enemy_money >= 0 && enemy_money <= 9500) {
        nb = "Save"
        if (loss_bonus == 0 || loss_bonus == 1) {
          nb = "Force"
        }
      } else if (enemy_money > 9500 && enemy_money < 18500) {
        nb = "Half Buy"
      } else if (enemy_money >= 18500) {
        nb = "Full Buy"
      } else {
        nb = "This shouldn't happen"
      }
    }
  }
  return nb
}

function calc_money(loss_bonus, enemy_money, team_deaths, enemy_deaths, round_outcome, enemy_buy, round, enemy_side) {
  if (round == 1 || round == 16) {
    enemy_money -= 5 * 700
  } else if ((round > 1 && round <= 3) || (round > 16 && round <= 18)) {
    if (enemy_buy == "force") {
      enemy_money = 250
    } else if (enemy_buy == "half buy") {
      if (enemy_side == "t") {
        enemy_money = 9500
      } else {
        enemy_money = 11000
      }
    } 
  } else {
    if (enemy_side == "t") {
      enemy_money -= 4800 * 5
      if (enemy_money < 0) {
        enemy_money = 0
      }
    } else {
      enemy_money -= 5500 * 5
      if (enemy_money < 0) {
        enemy_money = 0
      }
    }
  }
  var bonus_money = [1400, 1900, 2400, 2900, 3400]
  var kill_money = 0
  if (round == 1 || round == 16) {
    kill_money = 300
  } else if ((round > 1 && round <= 3) || (round > 16 && round <= 18)) {
    kill_money = 400
  } else {
    kill_money = 300
  }
  enemy_money += team_deaths * kill_money
  var live_money = 0
  if (round == 1 || round == 16) {
    live_money = 300
  } else if ((round > 1 && round <= 3) || (round > 16 && round <= 18)) {
    live_money = 2000
  } else {
    live_money = 3700
    if (enemy_side == "ct") {
      live_money = 3900
    }
  }
  enemy_money += (5 - enemy_deaths) * live_money
  if (round_outcome == "lose") {
    enemy_money += 5 * 3250
  } else if (round_outcome == "win") {
    enemy_money += 5 * bonus_money[loss_bonus]
  } else {
    if (enemy_side == "t") {
      enemy_money += 5 * 3500
    } else {
      enemy_money += 5 * bonus_money[loss_bonus]
    }
  }
  return enemy_money
}

export default App;