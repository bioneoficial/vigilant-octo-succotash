import { configureStore } from "@reduxjs/toolkit";
import privacyReducer from "@/Redux/Reducers/privacySlice";

export const store = configureStore({
  reducer: {
    privacy: privacyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
