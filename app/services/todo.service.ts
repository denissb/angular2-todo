import {Injectable} from 'angular2/core';
import {Store} from '@ngrx/store';
import {ITodoModel, ITodosState} from '../models/todo.model';
import {Observable} from 'rxjs';

import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../models/todo.model';


interface AppState {
    todos: ITodosState
}

@Injectable()
export default class TodoService {
    todos: Observable<ITodoModel[]>;
    static STORAGE_KEY = 'todos';

    constructor(private _store: Store<AppState>) {
        const $store: Observable<ITodosState> = _store.select('todos');
        this.todos = $store.map(data => data.entries);
    }

    add(todo: string): void {
        this._store.dispatch({type: ADD_TODO, payload: todo});
    }

    toggle(todo: ITodoModel): void {
        this._store.dispatch({ type: UPDATE_TODO, payload: todo });
    }

    delete(todo: ITodoModel):void {
        this._store.dispatch({ type: DELETE_TODO, payload: todo });
    }
}