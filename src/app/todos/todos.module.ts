import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoNewComponent} from './todo-new/todo-new.component';
import {TodoStorageService} from './todo-storage.service';
import {TodoService} from './todo.service';

@NgModule({
    declarations : [
        TodoItemComponent,
        TodoListComponent,
        TodoNewComponent
    ],
    imports : [
        CommonModule,
        FormsModule,
    ],
    exports : [
       TodoListComponent,
       TodoNewComponent
    ],
    providers: [
        TodoService,
        TodoStorageService
    ]
})
export class TodosModule {

}
