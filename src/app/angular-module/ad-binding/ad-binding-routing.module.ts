import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProperyBindingComponent } from "./propery-binding/propery-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { ReferenceVariableComponent } from "./reference-variable/reference-variable.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";

const routes: Routes = [
  {
    path: "",
    component: ProperyBindingComponent
  },
  {
    path: "class",
    component: ClassBindingComponent
  },
  {
    path: "style",
    component: StyleBindingComponent
  },
  {
    path: "event",
    component: EventBindingComponent
  },
  {
    path: "reference",
    component: ReferenceVariableComponent
  },
  {
    path: "twoway",
    component: TwoWayBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdBindingRoutingModule {}
