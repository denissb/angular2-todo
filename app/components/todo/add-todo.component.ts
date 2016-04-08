import {Component, Input} from 'angular2/core';
import TodoService from '../../services/todo.service';

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

    addTodo(todo: HTMLInputElement) {
        this.todoService.add(todo.value);
        todo.value = '';
    }
}