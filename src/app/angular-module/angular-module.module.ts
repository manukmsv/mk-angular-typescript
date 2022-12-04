import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularRoutingModule, ngComponents} from './angular-module-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AngularRoutingModule
  ],
  declarations: [ngComponents]
})
export class AngularModule { }