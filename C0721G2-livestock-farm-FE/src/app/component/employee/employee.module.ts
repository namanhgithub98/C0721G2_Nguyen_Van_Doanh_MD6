import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent, EmployeeCreateComponent, EmployeeDeleteComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
