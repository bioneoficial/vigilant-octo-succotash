import { configureStore, getDefaultMiddleware, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import createSagaMiddleware from 'redux-saga'; // import Saga middleware

import privacyReducer from "@/Redux/Reducers/privacySlice";
import modalReducer from "@/Redux/Reducers/modalSlice";
import userReducer from "@/Redux/Reducers/userSlice";
import couponReducer from "@/Redux/Reducers/couponSlice";
import stampReducer from "@/Redux/Reducers/stampSlice";
import toastSuccessReducer from './Reducers/toastSuccessReducer';
import sessionSliceReducer from './Reducers/sessionSlice';
import cookieBannerReducer from "./Reducers/cookieBannerSlice";

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
  toastSuccess: toastSuccessReducer,
  sessionManagement: sessionSliceReducer,
  cookieBanner: cookieBannerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({thunk: true, serializableCheck: false}).concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
