
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import postsSlice from "../features/postsSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store


























