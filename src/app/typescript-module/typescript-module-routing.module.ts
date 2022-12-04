import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TypescriptComponent } from "./typescript.component";
import { TsVariablesComponent } from "./ab-ts-basic/aa-ts-variables.component";
import { TsOperatorComponent } from "./ab-ts-basic/ab-ts-operator.component";
import { TsDecisionMakingComponent } from "./ab-ts-basic/ac-ts-decision-making.component";
import { TsLoopsComponent } from "./ab-ts-basic/ad-ts-loops.component";
import { TsFunctionsComponent } from "./ab-ts-basic/ae-ts-functions.component";
import { TsLambdaFunctionsComponent } from "./ab-ts-basic/af-ts-lambda-functions.component";
import { TsFunctionsOverloadComponent } from "./ab-ts-basic/ag-ts-function-overload.component";
import { TsNumbersComponent } from "./ab-ts-basic/ah-ts-numbers.component";
import { TsStringsComponent } from "./ab-ts-basic/ai-ts-strings.component";
import { TsArraysComponent } from "./ab-ts-basic/aj-ts-arrays.component";
import { TsTuplesComponent } from "./ab-ts-basic/ak-ts-tuples.component";
import { TsUnionComponent } from "./ab-ts-basic/al-ts-union.component";
import { TsInterfacesComponent } from "./ab-ts-basic/am-ts-interfaces.component";
import { TsUtilityFunctionsComponent } from "./ab-ts-utility/ab-ts-utility-functions.component";

const tsRoutes: Routes = [
  {
    path: "",
    component: TypescriptComponent
  },
  {
    path: "ts-variable",
    component: TsVariablesComponent
  },
  {
    path: "ts-operator",
    component: TsOperatorComponent
  },
  {
    path: "ts-decision",
    component: TsDecisionMakingComponent
  },
  {
    path: "ts-loops",
    component: TsLoopsComponent
  },
  {
    path: "ts-functions",
    component: TsFunctionsComponent
  },
  {
    path: "ts-lambda-functions",
    component: TsLambdaFunctionsComponent
  },
  {
    path: "ts-function-overload",
    component: TsFunctionsOverloadComponent
  },
  {
    path: "ts-numbers",
    component: TsNumbersComponent
  },
  {
    path: "ts-strings",
    component: TsStringsComponent
  },
  {
    path: "ts-arrays",
    component: TsArraysComponent
  },
  {
    path: "ts-tuples",
    component: TsTuplesComponent
  },
  {
    path: "ts-union",
    component: TsUnionComponent
  },
  {
    path: "ts-interfaces",
    component: TsInterfacesComponent
  },
  {
    path: "ts-utility-functions",
    component: TsUtilityFunctionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(tsRoutes)],
  exports: [RouterModule]
})
export class TypecriptRoutingModule {}

export const tsComponents = [
  TypescriptComponent,
  TsVariablesComponent,
  TsOperatorComponent,
  TsDecisionMakingComponent,
  TsLoopsComponent,
  TsFunctionsComponent,
  TsLambdaFunctionsComponent,
  TsFunctionsOverloadComponent,
  TsNumbersComponent,
  TsStringsComponent,
  TsArraysComponent,
  TsTuplesComponent,
  TsUnionComponent,
  TsInterfacesComponent,
  TsUtilityFunctionsComponent
];
