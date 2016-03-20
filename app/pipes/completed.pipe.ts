import {Pipe} from 'angular2/core';
import {ITodoModel} from '../models/todo.model';

@Pipe({
    name: 'completed',
    pure: false
})
export default class CompletedPipe {
    transform(todos: ITodoModel[]): number {
        let count = 0;

        for (let todo of todos) {
            if (!todo.completed) {
                count++;
            }
        }

        return count;
    }
}