import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', component: ListEmployeeComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
