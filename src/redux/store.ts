import { configureStore } from '@reduxjs/toolkit'
import shopyReducer from "./shopySlice"

export const store = configureStore({
  reducer: {
    shopy:shopyReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch