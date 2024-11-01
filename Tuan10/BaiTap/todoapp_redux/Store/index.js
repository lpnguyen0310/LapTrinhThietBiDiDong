import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
//import todoReducer from '../reducers/todoReducer';
//import rootSaga from '../sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;