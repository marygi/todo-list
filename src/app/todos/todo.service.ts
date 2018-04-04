import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TodoService {
    todosChanged = new Subject<Todo[]>();

    private todoList: Todo[] = [];

    constructor() {

    }

    setTodoList(todos: Todo[]) {
        this.todoList = todos ? todos : [];
        this.todosChanged.next(this.todoList.slice());
    }

    getTodoList() {
        return this.todoList.slice();
    }

    addTodo(todo: Todo) {
        this.todoList.push(todo);
        this.todosChanged.next(this.todoList.slice());
    }

    deleteTodo(index: number) {
        this.todoList.splice(index, 1);
        this.todosChanged.next(this.todoList.slice());
    }

    updateTodoStatus(index: number, status: boolean ) {
        this.todoList[index].status = status;
        this.todosChanged.next(this.todoList.slice());
    }
}
