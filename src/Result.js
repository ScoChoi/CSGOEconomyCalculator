import React from 'react';

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
    
export default Result;
