import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AcInterpolationRoutingModule } from "./ac-interpolation-routing.module";
import { BasicInterpolationComponent } from "./basic-interpolation/basic-interpolation.component";

@NgModule({
  declarations: [BasicInterpolationComponent],
  imports: [CommonModule, AcInterpolationRoutingModule]
})
export class AcInterpolationModule {}
