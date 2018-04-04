import {Component, Input, OnInit} from '@angular/core';

import {Todo} from '../todo.model';
import {TodoStorageService} from '../todo-storage.service';
import {TodoService} from '../todo.service';

import {TODO_STATUS_CONST} from '../todo.status';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;

	constructor(private todoService: TodoService, private todoStorageService: TodoStorageService) {}

  ngOnInit() {
  }
  updateTodoStatus(index) {
	  const status = this.todo.status ? TODO_STATUS_CONST.UNCOMPLETED : TODO_STATUS_CONST.COMPLETED;
		this.todoService.updateTodoStatus(index, status);
  }

  deleteTodoStatus(index: number) {
    this.todoService.deleteTodo(index);
  }
}
