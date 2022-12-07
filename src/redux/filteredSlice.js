import { createSlice } from "@reduxjs/toolkit";

const filterInetealState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInetealState,
    reducers: {
        getFilteredContacts: {
            reducer(state, action) {
                return (state = action.payload);
            },
        },
    },
});

export const { getFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
