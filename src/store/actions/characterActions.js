import {CHARACTERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {
  CHANGE_PARAMS,
  FETCH_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTERS,
  PENDING_SINGLECHARACTER,
  REJECT_CHARACTERS,
  REJECT_SINGLECHARACTER,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      dispatch({type: FETCH_CHARACTERS, payload: response.data.results});
    } catch (error) {
      dispatch({type: REJECT_CHARACTERS, error: error});
    }
  };
};

export const getSingleCharacter = characterID => {
  const url = `${CHARACTERS_URL}/${characterID}`;

  return async dispatch => {
    dispatch({type: PENDING_SINGLECHARACTER});
    try {
      const response = await getRequest(url);
      dispatch({type: FETCH_SINGLECHARACTER, payload: response?.data});
    } catch (error) {
      dispatch({type: REJECT_SINGLECHARACTER, error: error});
    }
  };
};

export const changeParams = params => {
  return async dispatch => {
    dispatch({type: CHANGE_PARAMS, params: params});
  };
};
