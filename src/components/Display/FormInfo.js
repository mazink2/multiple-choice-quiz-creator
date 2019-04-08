import React, { Component } from 'react';
import FormDescription from './FormDescription';

import { Consumer } from '../../context';

export class FormInfo extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);

          return (
            <React.Fragment>
              <div className="display-title">
                <h1>{value.title}</h1>
                {value.description.map((line, index) => (
                  <FormDescription key={index} line={line} />
                ))}
              </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default FormInfo;