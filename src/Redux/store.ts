import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import createSagaMiddleware from 'redux-saga'; // import Saga middleware

import privacyReducer from "@/Redux/Reducers/privacySlice";
import modalReducer from "@/Redux/Reducers/modalSlice";
import userReducer from "@/Redux/Reducers/userSlice";
import couponReducer from "@/Redux/Reducers/couponSlice";
import stampReducer from "@/Redux/Reducers/stampSlice";

import mySaga from '../../sagas'; 

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  privacy: privacyReducer,
  modal: modalReducer,
  user: userReducer,
  coupon: couponReducer,
  stamp: stampReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({serializableCheck: false}), sagaMiddleware], // Add saga middleware
});

// then run the saga
sagaMiddleware.run(mySaga);

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
