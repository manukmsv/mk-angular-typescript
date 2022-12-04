import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AaHelloWorldRoutingModule } from "./aa-hello-world-routing.module";
import { HelloWorldComponent } from "./hello-world/hello-world.component";

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [CommonModule, AaHelloWorldRoutingModule]
})
export class AaHelloWorldModule {}
