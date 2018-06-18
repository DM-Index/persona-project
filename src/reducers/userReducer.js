import axios from "axios";
// Initial State
const initialState = {
  user: {},
  isAuthed: false
};
// Constants
const GET_USER = "GET_USER";
// Action Creators
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("api/me")
  };
}
// Reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data,
        isAuthed: true
      };
    case `${GET_USER}_REJECTED`:
      return {
        ...state,
        isAuthed: false
      };
    default:
      return state;
  }
}
