import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

function configureStore(initialState: any = {}) {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunkMiddleware, sagaMiddleware),
                (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
            ),
        ),
        runSaga: sagaMiddleware.run,
    };
}

export default configureStore;
