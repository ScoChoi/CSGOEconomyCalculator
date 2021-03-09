import React from 'react';
import ReactDOM from 'react-dom';
import './side.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }
  
class Side extends React.Component {
    renderSquare(i) {
      return <Square />;
    }

tsidebutton()
{
  this.props.enemy_side.setState({
    enemy_side: "ct"
  })
}

ctsidebutton()
{
  this.setState({
    enemy_side: "t"
  })
}
  
    render() {
      return (
        <div>
          <h1> Choose Your Starting Side </h1>
          <button 
            class="tsidebutton" 
            onClick={() => this.tsidebutton()}
          />
          <button 
            class="ctsidebutton"
            onClick={() => this.ctsidebutton()}
          />
        </div>
      );
    }
  }

export default Side;
