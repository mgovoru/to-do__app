import { createSlice } from '@reduxjs/toolkit';
import { InitialStore } from './types';

const initialState: InitialStore = { tasks: []};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks = [action.payload, ...state.tasks];
		},
		removeTask: (state, action) => {
			state.tasks = state.tasks.filter(
				(element) => element.id !== action.payload
			);
		},
		editTask: (state, action) => {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload) {
					task.completed = !task.completed;
				}
				return task;
			});
		},
		updateTask: (state, action) => {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload.id) {
					task.text = action.payload.text;
				}
				return task;
			});
		},
	},
});

export const {
	addTask,
	removeTask,
	editTask,
	updateTask
} = tasksSlice.actions;

export default tasksSlice.reducer;
