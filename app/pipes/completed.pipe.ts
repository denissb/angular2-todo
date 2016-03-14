import {Pipe} from 'angular2/core';
import {TodoModel} from '../models/todo.model';

@Pipe({
    name: 'completed',
    pure: false
})
export default class CompletedPipe {
    transform(todos: TodoModel[]): number {
        let count = 0;

        for (let todo of todos) {
            if (!todo.completed) {
                count++;
            }
        }

        return count;
    }
}