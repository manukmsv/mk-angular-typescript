import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InlineComponentComponent } from "./inline-component/inline-component.component";
import { SimpleComponentComponent } from "./simple-component/simple-component.component";

const routes: Routes = [
  {
    path: "",
    component: SimpleComponentComponent
  },
  {
    path: "inline",
    component: InlineComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbComponentsRoutingModule {}
