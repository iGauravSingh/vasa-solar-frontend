import { createSlice } from "@reduxjs/toolkit";


export interface Gallery {
    id: string | number;
    imageName: string;
    imageUrl: string;
}

export interface GalleryState {
    value: {
        gallery: Gallery[] | null;
        isLoading: boolean
    }
}

const initialState: GalleryState = {
    value: {
        gallery: null,
        isLoading: true
    }
}

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        setgallery: (state,action) => {
            state.value.gallery = action.payload;
            state.value.isLoading = false
        },
        cleargallery: (state) => {
            state.value.gallery = null;
            state.value.isLoading = false
        },
        deletegallery: (state,action) => {
            const id = action.payload;
            if(state.value.gallery) {
                state.value.gallery = state.value.gallery.filter(po => po.id !== id)
            }
            state.value.isLoading = false;
        }
    }
})

export const { setgallery, cleargallery, deletegallery} = gallerySlice.actions;
export default gallerySlice.reducer










