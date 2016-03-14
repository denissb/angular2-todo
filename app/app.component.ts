import {Component} from 'angular2/core';
import TodoList from './components/todo-list.component';
import AddTodo from './components/add-todo.component';
import Header from './components/header.component';
import TodoService from './services/todo.service';

@Component({
    selector: 'my-app',
    template: `
        <header></header>
        <add-todo></add-todo>
        <todo-list></todo-list>
    `,
    directives: [Header, AddTodo, TodoList],
    providers: [TodoService]
})
export class AppComponent {}
