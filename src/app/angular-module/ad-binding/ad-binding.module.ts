import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdBindingRoutingModule } from "./ad-binding-routing.module";
import { ProperyBindingComponent } from "./propery-binding/propery-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { ReferenceVariableComponent } from "./reference-variable/reference-variable.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";

@NgModule({
  declarations: [
    ProperyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    ReferenceVariableComponent,
    TwoWayBindingComponent
  ],
  imports: [CommonModule, AdBindingRoutingModule, FormsModule]
})
export class AdBindingModule {}
