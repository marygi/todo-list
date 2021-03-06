import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Todo} from '../todo.model';
import {TODO_STATUS_CONST} from '../todo.status';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  constructor(
    private todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTodoItem = new Todo(value.name, value.description, TODO_STATUS_CONST.UNCOMPLETED);
    this.todoService.addTodo(newTodoItem);
    form.reset();
  }
}
