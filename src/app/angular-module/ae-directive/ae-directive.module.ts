import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeDirectiveRoutingModule } from './ae-directive-routing.module';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';


@NgModule({
  declarations: [NgifDirectiveComponent, NgswitchDirectiveComponent, NgforDirectiveComponent],
  imports: [
    CommonModule,
    AeDirectiveRoutingModule
  ]
})
export class AeDirectiveModule { }
