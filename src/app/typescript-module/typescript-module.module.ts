import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypecriptRoutingModule, tsComponents} from './typescript-module-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TypecriptRoutingModule
  ],
  declarations: [tsComponents]
})
export class TypescriptModule { }