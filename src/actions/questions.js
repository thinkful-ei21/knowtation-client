import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SEND_USER_INPUT_ERROR = 'SEND_USER_INPUT_ERROR';
export const sendUserInputError = err => ({
  type: SEND_USER_INPUT_ERROR,
  err
})

export const sendUserInput = (input, dispatch) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/some-endpoint`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      input
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    dispatch(sendUserInputError(err));
  });
}

