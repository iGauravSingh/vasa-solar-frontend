
import { createSlice} from "@reduxjs/toolkit"

export interface Post {
    id: string | number;
    heading: string;
    location: string;
    completionDate: string;
    description: string;
    imageUrl: string;
    createdAt: string
}

export interface PostsState {
    value: {
        posts: Post[] | null;
        isLoading: boolean
    }
}

const initialState: PostsState ={
    value: {
        posts: null,
        isLoading: true
    }
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setposts: (state,action) => {
            state.value.posts = action.payload;
            state.value.isLoading = false
        },
        clearposts: (state) => {
            state.value.posts = null;
            state.value.isLoading = false
        },
        deletePosts: (state, action) => {
            const id = action.payload;
            if (state.value.posts) {
                state.value.posts = state.value.posts.filter(po => po.id !== id);
            }
            state.value.isLoading = false;
        }
    }
})

export const { setposts, clearposts, deletePosts } = postSlice.actions;
export default postSlice.reducer





