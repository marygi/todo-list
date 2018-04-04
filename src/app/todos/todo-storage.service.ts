import {Injectable} from '@angular/core';

import {Todo} from './todo.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TodoService} from './todo.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

@Injectable()
export class TodoStorageService {
    constructor(
        private http: HttpClient,
        private todoService: TodoService ) {}

    updateTodoList() {
        return this.http.put('https://todo-list-marygi.firebaseio.com/todos.json',
            this.todoService.getTodoList(), httpOptions).subscribe();
    }

    getTodoList() {
        return this.http.get<Todo[]>('https://todo-list-marygi.firebaseio.com/todos.json')
            .subscribe(
                (todos: Todo[]) => {
                    this.todoService.setTodoList(todos);
                }
            );
    }
}
