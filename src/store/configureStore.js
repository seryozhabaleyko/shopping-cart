import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunkMiddleware, sagaMiddleware),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            ),
        ),
        runSaga: sagaMiddleware.run,
    };
}

export default configureStore;
