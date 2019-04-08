import React from 'react';
import Option from './Option';

import { Consumer } from '../../context';

export function SingleQuestion(props) {
  const question = props.question;

  return (
    <Consumer>
      {value => (
        <React.Fragment>
          <div className="question">
            <p className="question-name"><strong>{question.questionName}</strong></p>
            <div className="question-desc">{question.questionDesc}</div>
            {question.options.map((option, index) => (
              <Option key={index} index={index} option={option} />
            ))}
          </div>
        </React.Fragment>
      )}
    </Consumer>
  )
}

export default SingleQuestion;