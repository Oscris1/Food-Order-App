import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMenu = createAsyncThunk('menu/getMenu', async () => {
  const response = await axios.get('http://10.0.2.2:8000/api'); //amdroid emulator connection to localhost
  const data = response.data;
  return data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getMenu.pending]: (state) => {
      state.status = 'loading';
    },
    [getMenu.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getMenu.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
