import React, { Component } from 'react';
import Button from '../Utilities/Button';

import { Consumer } from '../../context';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

export class QuestionForm extends Component {
  state = {
    questionName: '',
    questionDesc: '',
    options: [],
    id: this.props.questionId,
    currentOption: ''
  };

  onChange = (dispatch, e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (!(e.target.name === 'currentOption')) {
      // Update question in context state
      dispatch({
        type: 'UPDATE_QUESTION',
        payload: {
          [e.target.name]: e.target.value,
          id: this.state.id,
          fieldType: e.target.name
        }
      })
    }
  }

  addOption = (dispatch, e) => {
    e.preventDefault();

    const data = this.state;
    if (data.currentOption.length > 0) {

      this.setState({ options: [...data.options, data.currentOption] });

      // Add option to question in context state
      dispatch({
        type: 'ADD_OPTION',
        payload: {
          id: data.id,
          currentOption: data.currentOption
        }
      })

      // Clear input field for new option
      this.setState({ currentOption: '' });
    }
  }

  deleteOption = (dispatch, id) => {

    let updatedOptions = this.state.options.filter((option, index) => (!(id === index)));

    // this.setState({ options: this.state.options.filter((option, index) => (!(id === index))) });
    this.setState({ options: updatedOptions });

    // // Add option to question in context state
    dispatch({
      type: 'DELETE_OPTION',
      payload: {
        id: this.state.id,
        updatedOptions
      }
    })
  }

  deleteQuestion = (dispatch, e) => {
    e.preventDefault();

    // Add option to question in context state
    dispatch({
      type: 'DELETE_QUESTION',
      payload: {
        id: this.state.id
      }
    })
  }

  render() {
    const data = this.state;

    return (
      <Consumer>
        {value => (
          <React.Fragment>
            <form>
              <input
                type="text"
                className="form-field"
                name="questionName"
                placeholder="Question"
                value={this.state.question}
                onChange={this.onChange.bind(this, value.dispatch)}
              />
              <input
                type="text"
                className="form-field"
                name="questionDesc"
                placeholder="Question Description (Optional)"
                value={this.state.questionDesc}
                onChange={this.onChange.bind(this, value.dispatch)}
              />
              <div className="options">
                {data.options.map((option, index) => (
                  <div className="option" id={`option-${index + 1}`} key={`option-${index + 1}`}>
                    <div>{option}</div>
                    <FontAwesomeIcon
                      icon="trash"
                      onClick={this.deleteOption.bind(this, value.dispatch, index)}
                    />
                  </div>
                ))}
              </div>
              <input
                type="text"
                className="form-field"
                name="currentOption"
                value={data.currentOption}
                placeholder="Add options"
                onChange={this.onChange.bind(this, value.dispatch)}
              />
              <Button
                text="Add option"
                textColor="#fff"
                btnColor="#09797e"
                clickFunc={this.addOption}
              />
              <Button
                text="Delete question"
                textColor="#fff"
                btnColor="#ea4b35"
                clickFunc={this.deleteQuestion}
              />
            </form>
          </React.Fragment>
        )}
      </Consumer>
    )
  }
}

export default QuestionForm;