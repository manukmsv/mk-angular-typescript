import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';


const routes: Routes = [
  {
    path: '',
    component: ParentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfComponentInteractionRoutingModule { }
