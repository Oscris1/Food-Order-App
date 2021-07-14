import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    restaurant: { longitude: null, latitude: null },
    user: { longitude: null, latitude: null },
  },
  reducers: {
    setRestaurantLocation(state, action) {
      state.restaurant.longitude = action.payload.longitude;
      state.restaurant.latitude = action.payload.latitude;
    },
    setUserLocation(state, action) {
      state.user.longitude = action.payload.longitude;
      state.user.latitude = action.payload.latitude;
    },
  },
});

export const { setRestaurantLocation, setUserLocation } = locationSlice.actions;
export default locationSlice;
