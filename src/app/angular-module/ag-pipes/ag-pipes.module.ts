import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgPipesRoutingModule } from './ag-pipes-routing.module';
import { PipeInbuiltComponent } from './pipe-inbuilt/pipe-inbuilt.component';


@NgModule({
  declarations: [PipeInbuiltComponent],
  imports: [
    CommonModule,
    AgPipesRoutingModule
  ]
})
export class AgPipesModule { }
