import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS_REQUEST, fetchTodosSuccess, fetchTodosFailure, ADD_TODO_REQUEST, addTodoSuccess, addTodoFailure } from '../Actions/ToDoAction';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
    const data = yield response.json();
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* addTodoSaga(action) {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    const data = yield response.json();
    yield put(addTodoSuccess(data));
  } catch (error) {
    yield put(addTodoFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosSaga);
  yield takeEvery(ADD_TODO_REQUEST, addTodoSaga);
}