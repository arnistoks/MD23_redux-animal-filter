import { configureStore } from '@reduxjs/toolkit';
import animalsSlice from './reducers/animalsSlice';

const store = configureStore({
  reducer: {
    speciesItems: animalsSlice,
    animalsItems: animalsSlice,
    hiddenMode: animalsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
