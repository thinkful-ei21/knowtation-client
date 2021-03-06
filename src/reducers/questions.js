import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  SEND_ANSWER_REQUEST,
  SEND_ANSWER_SUCCESS,
  SEND_ANSWER_ERROR
} from '../actions/questions';

const initialState = {
  question: {},
  response: false,
  streak: 0,
  numCorrect: 0,
  numAttempts: 0,
  validation: null,
  loading: false,
  error: null
}

export default function questionsReducer(state = initialState, action) {

  switch(action.type) {

    case FETCH_QUESTION_REQUEST:
    return {
      ...state,
      loading: true
    }

    case FETCH_QUESTION_SUCCESS:
    return {
      ...state,
      question: action.question.question,
      numCorrect: action.question.numCorrect,
      numAttempts: action.question.numAttempts,
      validation: null,
      loading: false,
      response: false,
      error: null
    }

    case FETCH_QUESTION_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error
    }

    case SEND_ANSWER_REQUEST:
    return {
      ...state,
      loading: true,
      answer: action.answer
    }

    case SEND_ANSWER_SUCCESS:
    return {
      ...state,
      response: action.response.response,
      streak: (action.response.response ? state.streak += 1 : 0),
      numCorrect: action.response.numCorrect,
      numAttempts: action.response.numAttempts,
      validation: action.response.response,
      loading: false,
      error: null
    }

    case SEND_ANSWER_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error
    }

    default:
    return state;

  }

}