import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import albumsReducer from "../reducers/albums";
import tracksReducer from "../reducers/tracks";
import artistNameReducer from "../reducers/artistName";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    albums: {
        data: [],
        loading: true
    },
    tracks : {
        data: [],
        loading: true
    },
    artistName : {
        data: [],
        loading: true
    }
};

const bigReducer = combineReducers({ albums: albumsReducer, tracks: tracksReducer, artistName: artistNameReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
