import React from 'react';

class Side extends React.Component {
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
export default Side;
