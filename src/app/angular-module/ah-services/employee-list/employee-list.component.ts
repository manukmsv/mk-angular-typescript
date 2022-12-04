import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { IEmployee } from "../iemployee";

@Component({
  selector: "app-employee-list",
  template: `
    <p>
      employee-list works!
    </p>
    <ul>
      <li *ngFor="let emp of employeesList">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let emp of employeesData">
        {{ emp.id }} - {{ emp.name }} - {{ emp.age }}
      </li>
    </ul>
    {{ errorMessage }}
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employeesList = [];
  employees: IEmployee[];
  employeesData: IEmployee[];
  errorMessage: string;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeesList = this._employeeService.getEmployeeList();
    this._employeeService
      .getEmployees()
      .subscribe(data => (this.employees = data));
    this._employeeService
      .getEmployeeData()
      .subscribe(
        data => (this.employeesData = data),
        error => (this.errorMessage = error)
      );
  }
}
