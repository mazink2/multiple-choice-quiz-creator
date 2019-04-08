import React, { Component } from 'react';
import TitleForm from './TitleForm';
import QuestionForm from './QuestionForm';
import Button from '../Utilities/Button';

import { Consumer } from '../../context';

import uuid from 'uuid';

export class Forms extends Component {
  addBtnRef = React.createRef;

  addQuestion = (dispatch) => {
    // Add new question in context state
    dispatch({
      type: 'ADD_QUESTION',
      payload: {
        questionName: '',
        questionDesc: '',
        options: [],
        id: uuid()
      }
    })
  }

  render() {
    return (
      <Consumer>
        {value => (
          <div className="forms">
            <TitleForm />
            {/* <div className="question-forms"> */}
            {value.questions.map((question, index) => (
              <QuestionForm key={question.id} questionId={question.id} />
            ))}
            {/* </div> */}
            <Button
              text="Add question"
              textColor="#fff"
              btnColor="#09797e"
              clickFunc={() => this.addQuestion(value.dispatch)}
            />
          </div>
        )}
      </Consumer>
    )
  }
}

export default Forms;