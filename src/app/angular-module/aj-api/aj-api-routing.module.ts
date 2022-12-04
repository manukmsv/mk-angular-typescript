import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllApiComponent } from "./all-api/all-api.component";
import { NgTemplateOutletComponent } from "./common/ng-template-outlet/ng-template-outlet.component";
import { NgComponentOutletComponent } from "./common/ng-component-outlet/ng-component-outlet.component";

const routes: Routes = [
  {
    path: "ngTemplateOutlet",
    component: NgTemplateOutletComponent
  },
  {
    path: "",
    component: AllApiComponent,
    children: [
      {
        path: "common",
        children: [
          { path: "ngTemplateOutlet", component: NgTemplateOutletComponent },
          { path: "ngComponentOutlet", component: NgComponentOutletComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjApiRoutingModule {}
