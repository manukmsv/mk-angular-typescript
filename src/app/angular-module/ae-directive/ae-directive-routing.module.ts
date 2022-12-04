import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';


const routes: Routes = [
  {
    path: '',
    component: NgifDirectiveComponent
  },
  {
    path: 'ngswitch',
    component: NgswitchDirectiveComponent
  },
  {
    path: 'ngfor',
    component: NgforDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeDirectiveRoutingModule { }
