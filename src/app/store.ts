
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import postsSlice from "../features/postsSlice";
import gallerySlice from "../features/gallerySlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsSlice,
        gallery: gallerySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store


























