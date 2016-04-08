import {Component} from 'angular2/core';
import TodoList from './components/todo/todo-list.component';
import AddTodo from './components/todo/add-todo.component';
import Header from './components/todo/header.component';
import TodoService from './services/todo.service';

//Devtools

import {Devtools} from '@ngrx/devtools';

@Component({
    selector: 'my-app',
    template: `
        <header></header>
        <add-todo></add-todo>
        <todo-list></todo-list>
        <ngrx-devtools></ngrx-devtools>
    `,
    directives: [Header, AddTodo, TodoList, Devtools],
    providers: [TodoService]
})
export class AppComponent {}
