import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowroutingComponent } from './showrouting/showrouting.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShowroutingComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'employeelist', component: EmployeeListComponent },
          { path: 'departmentlist', component: DepartmentListComponent }
        ]
      }
    ]
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'departments',
    component: DepartmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiShowroutingRoutingModule { }
export const ShowroutingRoutingComponents = [ShowroutingComponent, EmployeeListComponent, DepartmentListComponent]
