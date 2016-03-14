import {Component, Input} from 'angular2/core';
import TodoService from '../services/todo.service';
import {TodoModel} from '../models/todo.model';

@Component({
    selector: 'add-todo',
    template: `
    <div class="form-group">
        <label>Add todo: </label>
        <input #todo (keyup.enter)="addTodo(todo)" class="form-control" />
    </div>`
})
export default class Todo {
    
    constructor(public todoService: TodoService) {
    }

    addTodo(todo: any) {
        this.todoService.add(todo.value);
        todo.value = '';
    }
}