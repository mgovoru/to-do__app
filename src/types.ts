export type Task = {
	id: number,
	text: string,
	completed: boolean
}
export type InitialStore = {
	tasks: Task[];
};
