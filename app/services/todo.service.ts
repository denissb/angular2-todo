import {Injectable} from 'angular2/core';
import {TodoModel} from '../models/todo.model';

@Injectable()
export default class TodoService {
    todos: TodoModel[];
    static STORAGE_KEY = 'todos';

    constructor() {
        this.todos = this.getState() || [
            { title: 'Read the todo list', completed: true },
            { title: 'Look at the code', completed: false }
        ];
    }

    add(todo: string): void {
        if (!todo.length) {
            return;
        }
        this.todos.push({ title: todo, completed: false });
        this.saveState();
    }

    toggle(todo: TodoModel): void {
        todo.completed = !todo.completed;
        this.saveState();
    }

    delete(todo: TodoModel):void {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.saveState();
    }

    private saveState() {
        localStorage.setItem(TodoService.STORAGE_KEY, JSON.stringify(this.todos));
    }

    private getState(): TodoModel[] {
        return JSON.parse(localStorage.getItem(TodoService.STORAGE_KEY));
    }
}