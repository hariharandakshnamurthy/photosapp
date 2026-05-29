import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    filteredPhotos: [],
    loading: false,
    error: null,
    searchText: "",
};

const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        getPhotos: (state) => {
            state.loading = true;
            state.error = null;
        },

        getPhotosSuccess: (state, action) => {
            state.loading = false;
            state.photos = action.payload;
            state.filteredPhotos = action.payload;
            state.error = null;
        },

        getPhotosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getSearchedPhotos: (state, action) => {
            const searchText = action.payload.toLowerCase();
            state.searchText = action.payload;
            state.filteredPhotos = state.photos.filter((photo) => {
                const description = photo.alt_description || "";
                return description.toLowerCase().includes(searchText);
            });
        },
        searchPhotosRequest: (state, action) => {
            state.loading = true
            state.searchText = action.payload
            state.error = null
        },
        searchPhotosSuccess: (state, action) => {
            state.loading = false
            state.filteredPhotos = action.payload
            state.error = null
        },
        searchPhotosFailure: (state, action) => {
            state.searchLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getPhotos,
    getPhotosSuccess,
    getPhotosFailure,
    getSearchedPhotos,
    searchPhotosFailure,
    searchPhotosRequest,
    searchPhotosSuccess
} = photosSlice.actions;

export default photosSlice.reducer;