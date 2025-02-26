
import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './slice';

export const store = configureStore({
	reducer: tasksSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
