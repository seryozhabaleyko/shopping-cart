import { all, fork } from 'redux-saga/effects';
import productSaga from './product/sagas';
import productsSaga from './products/sagas';

function* rootSaga() {
    yield all([fork(productSaga), fork(productsSaga)]);
}

export default rootSaga;
