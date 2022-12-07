import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filteredSlice";
import storage from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const STORAGE_KEY = 'contacts';
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: STORAGE_KEY,
    storage,
    list: ['contacts'],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);
