import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER, 
    REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import countSlice from './toolkitReduser/countSlice';

const persistConfig = {
    key: 'posts',
    version: 1,
    storage,
    whitelist: ['posts'],
    blacklist: ['_persist']
}

const rootReducer = combineReducers({
    count: countSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDM) =>
         getDM({
            serializableCheck: {
                ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST]
            }
        })
})