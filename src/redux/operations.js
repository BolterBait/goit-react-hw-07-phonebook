import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63908f1265ff41831117a29d.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, phone });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.post(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
