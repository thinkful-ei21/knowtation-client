import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
})

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
})

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
})

export const fetchQuestion = () => (dispatch, getState) => {
  dispatch(fetchQuestionRequest());

  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(question => dispatch(fetchQuestionSuccess(question)))
  .catch(err => dispatch(fetchQuestionError(err)))
}

export const SEND_ANSWER_REQUEST = 'SEND_ANSWER_REQUEST';
export const sendAnswerRequest = answer => ({
  type: SEND_ANSWER_REQUEST,
  answer
})

export const SEND_ANSWER_SUCCESS = 'SEND_ANSWER_SUCCESS';
export const sendAnswerSuccess = correct => ({
  type: SEND_ANSWER_SUCCESS,
  correct
})

export const SEND_ANSWER_ERROR = 'SEND_ANSWER_ERROR';
export const sendAnswerError = error => ({
  type: SEND_ANSWER_ERROR,
  error
})

export const sendAnswer = answer => (dispatch, getState) => {

  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/some-endpoint`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      answer: answer
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(console.log(answer))
  .catch(err => {
    dispatch(sendAnswerError(err));
  });
}
