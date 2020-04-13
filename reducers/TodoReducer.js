import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/types';

const INITIAL_STATE = [];

const TodoReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
      ];

    case GET_TODOS:
      return state;

    case UPDATE_TODO:
      return state.map((todo) => {
        if (action.id !== todo.id) {
          return todo;
        } else {
          return {
            ...todo,
            text: action.text,
          };
        }
      });

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
};

const persistConfig = {
  key: 'todo',
  storage: AsyncStorage,
  whitelist: ['id', 'text']
};

const rootReducer = combineReducers({
  todos: TodoReducer,
});

export default persistReducer(persistConfig, rootReducer);


