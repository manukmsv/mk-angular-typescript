import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AjApiRoutingModule } from "./aj-api-routing.module";
import { NgTemplateOutletComponent } from "./common/ng-template-outlet/ng-template-outlet.component";
import { AllApiComponent } from "./all-api/all-api.component";
import { NgComponentOutletComponent } from "./common/ng-component-outlet/ng-component-outlet.component";

@NgModule({
  declarations: [
    NgTemplateOutletComponent,
    AllApiComponent,
    NgComponentOutletComponent
  ],
  imports: [CommonModule, AjApiRoutingModule]
})
export class AjApiModule {}
