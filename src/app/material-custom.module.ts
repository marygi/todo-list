import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule
    ],
})
export class MaterialCustomModule { }
