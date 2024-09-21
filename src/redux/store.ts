import { configureStore } from "@reduxjs/toolkit";
import shopyReducer from "./shopySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage to localStorage for web

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
  // Add middleware for persisting state
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // Disable serializable check for Redux Persist
  //   }),
});

// Create persistor
export const persistor = persistStore(store);

// Types for Redux state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from '@reduxjs/toolkit'
// import shopyReducer from "./shopySlice"

// export const store = configureStore({
//   reducer: {
//     shopy:shopyReducer
//   },
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
