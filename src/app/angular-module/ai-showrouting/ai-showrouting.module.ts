import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiShowroutingRoutingModule, ShowroutingRoutingComponents } from './ai-showrouting-routing.module';



@NgModule({
  declarations: [ShowroutingRoutingComponents],
  imports: [
    CommonModule,
    AiShowroutingRoutingModule
  ]
})
export class AiShowroutingModule { }
