// usersReducer.js
import { combineReducers } from 'redux';
import { ActionTypes } from "../constants/action-types";

const intialState = {
  users: [],
  selectedUser: null,
  isFetching: false,
};

export const usersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload, isFetching: false };
    default:
      return state;
  }
};

export const selectedUsersReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return payload;
    case ActionTypes.REMOVE_SELECTED_USER:
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allUsers: usersReducer,
  selectedUser: selectedUsersReducer,
  // Add other reducers if any
});

export default rootReducer;
