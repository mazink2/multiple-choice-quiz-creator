import React, { Component } from 'react';
import { FormInfo } from './FormInfo';
import { Questions } from './Questions';

import { Consumer } from '../../context';


export class Display extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <div className="display">
              <FormInfo />
              <Questions />
            </div>
          </React.Fragment>
        )}
      </Consumer>
    )
  }
}

export default Display;