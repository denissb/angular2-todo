// FIXME - use Symbols?
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface ITodosState {
    entries: ITodoModel[]
}

export interface ITodoModel {
    title: string;
    completed: boolean;
}