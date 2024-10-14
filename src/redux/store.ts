import { configureStore } from "@reduxjs/toolkit";
import shopyReducer from "./shopySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, shopyReducer);

// Configure store
export const store = configureStore({
  reducer: {
    shopy: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
