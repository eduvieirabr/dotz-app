import { all } from 'redux-saga/effects';
import auth from '../login/redux/sagas/auth';

function* rootSagas() {
  yield all([auth()]);
}

export default rootSagas;
