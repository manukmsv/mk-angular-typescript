import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found.component";
import { WelcomeComponent } from "./welcome.component";

const appRoutes: Routes = [
  {
    path: "ng",
    loadChildren: () =>
      import("./angular-module/angular-module.module").then(
        m => m.AngularModule
      )
  },
  {
    path: "ts",
    loadChildren: () =>
      import("./typescript-module/typescript-module.module").then(
        m => m.TypescriptModule
      )
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const AppsComponent = [WelcomeComponent, PageNotFoundComponent];
