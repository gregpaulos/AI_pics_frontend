import { GET_PHOTO, GET_AI } from "../actions/index";

const initialState = {
  randomPhoto: [],
  watson: [],
  google: [],
  clarifai: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return { ...state, randomPhoto: [action.payload] };
    case GET_AI:
      return { ...state, [action.api]: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
