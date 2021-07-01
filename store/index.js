import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';

import menuSlice from './menu-slice';

const store = configureStore({
  reducer: { menu: menuSlice.reducer, cart: cartSlice.reducer },
});

export default store;
