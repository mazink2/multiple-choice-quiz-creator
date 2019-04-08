import React, { Component } from 'react';

import { Consumer } from '../../context';


export class Button extends Component {


  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <button
              style={{
                color: this.props.textColor,
                backgroundColor: this.props.btnColor
              }}
              onClick={this.props.clickFunc.bind(this, value.dispatch)}
              id={this.props.id}
            >
              {this.props.text}
            </button>
          </React.Fragment>
        )}
      </Consumer >
    )
  }
}

export default Button;