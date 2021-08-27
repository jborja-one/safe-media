import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import groupReducer from './groups';
import albumReducer from './albums';
import getIconsReducer from './group_icons';
import getAlbumIconsReducer from './album_icons';

const rootReducer = combineReducers({
	session: sessionReducer,
	groups: groupReducer,
	albums: albumReducer,
	groupIcons: getIconsReducer,
	albumIcons: getAlbumIconsReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require('redux-logger').default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
