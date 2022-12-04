import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AhServicesRoutingModule } from "./ah-services-routing.module";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeService } from "./employee.service";

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AhServicesRoutingModule
  ],
  providers: [EmployeeService]
})
export class AhServicesModule {}
