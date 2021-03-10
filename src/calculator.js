import React from 'react';

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

export default Calculator;