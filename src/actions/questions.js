import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SEND_ANSWER_REQUEST = 'SEND_ANSWER_REQUEST';
export const sendAnswerRequest = answer => ({
  type: SEND_ANSWER_REQUEST,
  answer
})

export const SEND_ANSWER_SUCCESS = 'SEND_ANSWER_SUCCESS';
export const sendAnswerSuccess = () => ({
  type: SEND_ANSWER_SUCCESS
})

export const SEND_ANSWER_ERROR = 'SEND_ANSWER_ERROR';
export const sendAnswerError = err => ({
  type: SEND_ANSWER_ERROR,
  err
})

export const sendAnswer = answer => (dispatch, getState) => {

  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/some-endpoint`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      answer
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    dispatch(sendAnswerError(err));
  });
}

// anytime we fetch a new question, decodeURI the response string

