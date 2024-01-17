import { createStore } from 'redux';
import rootReducer from './reducers/usersReducer'; 

const store = createStore(rootReducer);

export default store;
