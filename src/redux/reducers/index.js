import { combineReducers } from "redux";
import { usersReducer, selectedUsersReducer } from "./usersReducer";
const rootReducers = combineReducers({
  allusers: usersReducer,
  selectedUser: selectedUsersReducer,
});
export default rootReducers;
