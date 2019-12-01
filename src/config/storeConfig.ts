import { compose, createStore, applyMiddleware, Store } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createRootReducer, AppState } from '../store';

const rootReducer = createRootReducer();

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        logger,
    ),
);

export default function configureStore(initialState: any): Store<AppState> {
  return createStore(
        rootReducer,
        initialState,
        enhancer,
    );
}
