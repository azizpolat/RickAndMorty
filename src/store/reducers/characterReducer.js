import {
  CHANGE_PARAMS,
  FETCH_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTERS,
  PENDING_SINGLECHARACTER,
  REJECT_CHARACTERS,
  REJECT_SINGLECHARACTER,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  singleCharacter: [],
  pending: false,
  singleCharacterPendik: true,
  error: null,
  singleCharacterError: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case REJECT_CHARACTERS:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case PENDING_SINGLECHARACTER: {
      return {
        ...state,
        singleCharacterPendik: true,
      };
    }
    case FETCH_SINGLECHARACTER: {
      return {
        ...state,
        singleCharacter: action.payload,
        singleCharacterPendik: false,
      };
    }
    case REJECT_SINGLECHARACTER: {
      return {
        ...state,
        singleCharacterError: action.error,
      };
    }

    case CHANGE_PARAMS: {
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };
    }
    default:
      return state;
  }
};

export default characterReducer;
