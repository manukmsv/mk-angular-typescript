import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AbComponentsRoutingModule } from "./ab-components-routing.module";
import { InlineComponentComponent } from "./inline-component/inline-component.component";
import { SimpleComponentComponent } from "./simple-component/simple-component.component";
import { ComponentAsClassComponent } from "./component-as-class/component-as-class.component";
import { ComponentAsAttributeComponent } from "./component-as-attribute/component-as-attribute.component";

@NgModule({
  declarations: [
    InlineComponentComponent,
    SimpleComponentComponent,
    ComponentAsClassComponent,
    ComponentAsAttributeComponent
  ],
  imports: [CommonModule, AbComponentsRoutingModule]
})
export class AbComponentsModule {}
