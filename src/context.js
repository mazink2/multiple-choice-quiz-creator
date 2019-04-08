import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE_INFO':
      const info = action.payload;  // Payload data
      let key;
      let value;

      // Get key and value of data to update
      for (let i in info) {
        key = i;
        value = info[i];
      }

      if (key === 'description') {
        value = value.split('\n')
        // .map((val) => {
        //   console.log(val);
        // })
      }

      // re = ^\s*(-)$;





      // console.log(value);


      // Update state with key-value pair
      return {
        ...state,
        [key]: value
      }

    case 'UPDATE_QUESTION':
      let data = action.payload;        // Payload data
      let questions = state.questions;  // Questions array extracted from state


      // Create a new array of questions updated with the new data
      let updatedQuestions = questions.map((question) => {
        if (action.payload.id === question.id) {
          return {
            ...question,
            [data.fieldType]: data[data.fieldType]
          }
        }

        return question;
      })

      // Update state with the updated array of questions
      return {
        ...state,
        questions: updatedQuestions
      }

    case 'ADD_QUESTION':
      const newQuestion = action.payload;   // Empty question object

      // Add blank question to current list of questions
      questions = state.questions;
      questions.push(newQuestion);


      // Update state with the updated array of questions
      return {
        ...state,
        questions
      }

    case 'ADD_OPTION':
      questions = state.questions;  // Questions array extracted from state

      // Create a new array of questions with the new option added to the desired question
      updatedQuestions = questions.map((question) => {
        if (action.payload.id === question.id) {
          return {
            ...question,
            options: [...question.options, action.payload.currentOption]
          }
        }

        return question;
      })

      // Update state with the updated array of questions
      return {
        ...state,
        questions: updatedQuestions
      }

    case 'DELETE_QUESTION':
      questions = state.questions;  // Questions array extracted from state

      // Create a new array of questions with the desired question deleted
      updatedQuestions = questions.filter((question) => (!(action.payload.id === question.id)));

      // Update state with the updated array of questions
      return {
        ...state,
        questions: updatedQuestions
      }

    case 'DELETE_OPTION':
      questions = state.questions;  // Questions array extracted from state

      // Create a new array of questions with the desired option deleted
      updatedQuestions = questions.map((question) => {
        if (action.payload.id === question.id) {
          return {
            ...question,
            options: action.payload.updatedOptions
          }
        }

        return question;
      })

      // Update state with the updated array of questions
      return {
        ...state,
        questions: updatedQuestions
      }

    default:
      return state;

  }
}

export class Provider extends Component {
  state = {
    title: '',
    description: [],
    questions: [
      // {
      //   questionName: 'Question 1',
      //   questionDesc: 'What is your favourite color?',
      //   options: ['Red', 'Blue', 'Purple'],
      //   id: 1
      // },
      // {
      //   questionName: 'Question 2',
      //   questionDesc: 'Description',
      //   options: ['Option 1', 'Option 2', 'Option 3'],
      //   id: 2
      // }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;