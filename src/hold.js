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
  
    render() {
      const enemy_side = 't';
  
      return (
        <div class="box">
          <h1> Choose Your Starting Side </h1>
          <button 
            class="tsidebutton" 
            onClick={() => this.setState({enemy_side: 'ct'})}
          />
          <button 
            class="ctsidebutton"
            onClick={() => this.setState({enemy_side: 't'})}
          />
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Side />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  */