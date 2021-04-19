import { GET_LEADS } from '../actions/type.js';

const initialState = {
  leads: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
  }
}
