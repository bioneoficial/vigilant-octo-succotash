import { configureStore } from "@reduxjs/toolkit";
import privacyReducer from "@/Redux/Reducers/privacySlice";
import modalReducer from "@/Redux/Reducers/modalSlice";
import userReducer from "@/Redux/Reducers/userSlice";


export const store = configureStore({
  reducer: {
    privacy: privacyReducer,
    modal: modalReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
