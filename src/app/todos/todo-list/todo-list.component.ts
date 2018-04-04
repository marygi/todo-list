import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Todo} from '../todo.model';
import {TodoService} from '../todo.service';
import {TodoStorageService} from '../todo-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todoList: Todo[] = [];
  subscription: Subscription;
  constructor(private todoService: TodoService,
              private todoStorageService: TodoStorageService) { }

  ngOnInit() {

    this.subscription = this.todoService.todosChanged
      .subscribe(
        (todos: Todo[]) => {
          this.todoList = todos;
					this.todoStorageService.updateTodoList();
        }
      );

    this.todoStorageService.getTodoList();
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
