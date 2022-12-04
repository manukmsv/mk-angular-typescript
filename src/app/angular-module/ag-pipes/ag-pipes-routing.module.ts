import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeInbuiltComponent } from './pipe-inbuilt/pipe-inbuilt.component';


const routes: Routes = [
  {
    path: '',
    component: PipeInbuiltComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgPipesRoutingModule { }
