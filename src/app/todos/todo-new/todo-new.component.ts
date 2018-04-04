import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Todo} from '../todo.model';
import {TodoService} from '../todo.service';
import {TodoStorageService} from '../todo-storage.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  constructor(
    private todoService: TodoService, private todoStorageService: TodoStorageService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTodoItem = new Todo(value.name, value.description, '');
    this.todoService.addTodo(newTodoItem);
    this.todoStorageService.updateTodoList();
  }
}
