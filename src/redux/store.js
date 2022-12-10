import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filteredSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
    },
});

