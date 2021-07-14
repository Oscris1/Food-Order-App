import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';

import menuSlice from './menu-slice';

import locationSlice from './location-slice';

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    locations: locationSlice.reducer,
  },
});

export default store;
