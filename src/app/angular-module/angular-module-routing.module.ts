import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularComponentComponent } from './angular-component.component';

const tsRoutes: Routes = [
  {
    path: "",
    component: AngularComponentComponent
  },
  {
    path: 'hello',
    loadChildren: () => import('./aa-hello-world/aa-hello-world.module').then(m => m.AaHelloWorldModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./ab-components/ab-components.module').then(m => m.AbComponentsModule)
  },
  {
    path: 'interpolation',
    loadChildren: () => import('./ac-interpolation/ac-interpolation.module').then(m => m.AcInterpolationModule)
  },
  {
    path: 'binding',
    loadChildren: () => import('./ad-binding/ad-binding.module').then(m => m.AdBindingModule)
  },
  {
    path: 'directive',
    loadChildren: () => import('./ae-directive/ae-directive.module').then(m => m.AeDirectiveModule)
  },
  {
    path: 'component-interaction',
    loadChildren: () => import('./af-component-interaction/af-component-interaction.module').then(m => m.AfComponentInteractionModule)
  },
  {
    path: 'pipe',
    loadChildren: () => import('./ag-pipes/ag-pipes.module').then(m => m.AgPipesModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./ah-services/ah-services.module').then(m => m.AhServicesModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./ai-showrouting/ai-showrouting.module').then(m => m.AiShowroutingModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./aj-api/aj-api.module').then(m => m.AjApiModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(tsRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule {}

export const ngComponents = [
  AngularComponentComponent
];
