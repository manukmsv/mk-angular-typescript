import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-typescript",
  template: `
    TypeScript
    <hr />
    <ul class="amenu">
      <li>
        <a routerLink="/ts/ts-variable" routerLinkActive="active"
          >ts-variable</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-operator" routerLinkActive="active"
          >ts-operator</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-decision" routerLinkActive="active"
          >ts-decision</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-loops" routerLinkActive="active">ts-loops</a>
      </li>
      <li>
        <a routerLink="/ts/ts-functions" routerLinkActive="active"
          >ts-functions</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-lambda-functions" routerLinkActive="active"
          >ts-lambda-functions</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-function-overload" routerLinkActive="active"
          >ts-function-overload</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-numbers" routerLinkActive="active">ts-numbers</a>
      </li>
      <li>
        <a routerLink="/ts/ts-strings" routerLinkActive="active">ts-strings</a>
      </li>
      <li>
        <a routerLink="/ts/ts-arrays" routerLinkActive="active">ts-arrays</a>
      </li>
      <li>
        <a routerLink="/ts/ts-tuples" routerLinkActive="active">ts-tuples</a>
      </li>
      <li>
        <a routerLink="/ts/ts-union" routerLinkActive="active">ts-union</a>
      </li>
      <li>
        <a routerLink="/ts/ts-interfaces" routerLinkActive="active"
          >ts-interfaces</a
        >
      </li>
      <li>
        <a routerLink="/ts/ts-utility-functions" routerLinkActive="active"
          >ts-utility-functions</a
        >
      </li>
    </ul>
  `,
  styles: [""]
})
export class TypescriptComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
