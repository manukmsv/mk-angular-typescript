import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BasicInterpolationComponent } from "./basic-interpolation/basic-interpolation.component";

const routes: Routes = [
  {
    path: "",
    component: BasicInterpolationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcInterpolationRoutingModule {}
