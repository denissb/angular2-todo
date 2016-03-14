// TodoList (components/todoList.ts)
import {Component} from 'angular2/core';
import Todo from './todo.component';
import TodoService from '../services/todo.service';
import {TodoModel} from '../models/todo.model';
import CompletedPipe from '../pipes/completed.pipe';

@Component({
    selector: 'todo-list',
    pipes: [CompletedPipe],
    template: `
    <ul class="list-group">
        <todo *ngFor="#todo of todos" [todo]="todo"></todo>
    </ul>
    <span>Left: {{todos | completed}}</span>
    `,
    directives: [Todo]
})
export default class TodoList {
    todos: TodoModel[];
    
    constructor(todoService: TodoService) {
        this.todos = todoService.todos;
    }
}