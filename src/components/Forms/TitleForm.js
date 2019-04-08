import React, { Component } from 'react';

import { Consumer } from '../../context';

export class TitleForm extends Component {
  state = {
    title: '',
    description: ''
  };

  onChange = (dispatch, e) => {
    this.setState({ [e.target.name]: e.target.value });

    // Update title and description in context state
    dispatch({
      type: 'UPDATE_TITLE_INFO',
      payload: {
        [e.target.name]: e.target.value
      }
    })
  }

  preventSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  render() {
    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <form>
              <input
                type="text"
                className="form-field"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onKeyPress={this.preventSubmit}
                onChange={this.onChange.bind(this, value.dispatch)}
              />
              <textarea
                className="form-field"
                name="description"
                placeholder="Form Description"
                value={this.state.description}
                onChange={this.onChange.bind(this, value.dispatch)}
                rows="5"
              />
            </form>
          </React.Fragment>
        )}
      </Consumer>
    )
  }
}

export default TitleForm;