import { ActionTypes } from "../constants/action-types";

export const setUsers = (users) =>({
  
    type: ActionTypes.SET_USERS,
    payload: users,
});

export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    // eslint-disable-next-line
    payload: user,
  };
};
export const removeSelectedUser = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
  };
};
