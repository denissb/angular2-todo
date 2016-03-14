import {Component, Input} from 'angular2/core';
import TodoService from '../services/todo.service';
import {TodoModel} from '../models/todo.model';

@Component({
    selector: 'todo',
    styles: [`
        .completed { text-decoration: line-through; }
        .to-do {
            cursor: pointer;
            margin-bottom: 5px;
        }
    `],
    template: `
    <li [ngClass]="{completed: todo.completed}" 
    (click)="toggle(todo)"
    class="list-group-item to-do">
        <span>{{todo.title }}</span>
        <button (click)="delete(todo)" 
        type="button" class="btn btn-danger btn-xs pull-right">Delete</button>
    </li>`
})
export default class Todo {
    @Input() todo: TodoModel;
    
    constructor(public todoService: TodoService) {}

    toggle(todo: TodoModel) {
        this.todoService.toggle(todo);
    }

    delete(todo: TodoModel) {
        this.todoService.delete(todo);
    }
}