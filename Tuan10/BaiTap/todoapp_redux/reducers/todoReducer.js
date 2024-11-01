import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, ADD_TODO_SUCCESS } from '../Actions/ToDoAction';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, tasks: action.payload, loading: false };
    case FETCH_TODOS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case ADD_TODO_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export default todoReducer;