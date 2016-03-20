// TodoList (components/todoList.ts)
import {Component} from 'angular2/core';
import Todo from './todo.component';
import TodoService from '../services/todo.service';
import {ITodoModel} from '../models/todo.model';
import {Observable} from 'rxjs';
import CompletedPipe from '../pipes/completed.pipe';

@Component({
    selector: 'todo-list',
    pipes: [CompletedPipe],
    template: `
    <ul class="list-group">
        <todo *ngFor="#todo of todos | async" [todo]="todo"></todo>
    </ul>
    <span>Left: {{todos | async | completed}}</span>
    `,
    directives: [Todo]
})
export default class TodoList {
    todos: Observable<ITodoModel[]>;
    
    constructor(todoService: TodoService) {
        this.todos = todoService.todos;
    }
}