import { Action, Reducer, Store } from '@ngrx/store';
import { ITodoModel, ITodosState } from '../models/todo.model';
import R from 'ramda'; // Ramda typings not yet finished

import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO
} from '../models/todo.model';

var initialState:ITodosState = {
    entries: [{
        title: 'Do a code review',
        completed: false
    }]
};

export const todos: Reducer<any> = (state = initialState, action: Action) => {
    let newState: ITodosState;
    switch (action.type) {
        case ADD_TODO:
            newState = R.clone(state);
            newState.entries.push({
                title: action.payload,
                completed: false
            });
            return newState;
        case UPDATE_TODO:
            newState = R.clone(state);
            let updateIndex = newState.entries.indexOf(action.payload);
            newState.entries[updateIndex].completed = !newState.entries[updateIndex].completed;
            return newState;
        case DELETE_TODO:
            newState = R.clone(state);
            let deleteIndex = newState.entries.indexOf(action.payload);
            newState.entries.splice(deleteIndex, 1);
            return newState;
        default:
            return state;    
    }    
}