import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';
let nextID = 0;

export function addTodo(text) {
  nextID++;
  return {
    type: ADD_TODO,
    id: nextID,
    text,
  };
}

export function updateTodo(id, text) {
  return {
    type: UPDATE_TODO,
    id,
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}
