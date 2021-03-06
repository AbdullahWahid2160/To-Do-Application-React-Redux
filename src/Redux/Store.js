import { createStore } from 'redux';
import TaskReducer from './Tasks/TaskReducer';

const Store = createStore(TaskReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store