import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
    )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
