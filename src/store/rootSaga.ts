import { all, fork } from 'redux-saga/effects';
import productSaga from './product/sagas';

function* rootSaga() {
    yield all([fork(productSaga)]);
}

export default rootSaga;
