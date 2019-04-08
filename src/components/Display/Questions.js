import React from 'react';
import { SingleQuestion } from './SingleQuestion';

import { Consumer } from '../../context';


export function Questions() {
  return (
    <Consumer>
      {value => (
        <React.Fragment>
          <div className="display-questions">
            {value.questions.map((question) => (
              <SingleQuestion key={question.id} question={question} />
            ))}
          </div>
        </React.Fragment>
      )}
    </Consumer>
  )
}

export default Questions;