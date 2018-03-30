import { GET_PHOTO, GET_AI, GET_ALL } from "../actions/index";

const initialState = {
  randomPhoto: [],
  watson: [],
  google: [],
  clarifai: [],
  all: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return { ...state, randomPhoto: [action.payload] };
    case GET_AI:
      return { ...state, [action.api]: action.payload };
    case GET_ALL:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
