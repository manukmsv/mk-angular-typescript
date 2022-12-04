import { Component, OnInit } from "@angular/core";

@Component({
  selector: "angular-component",
  template: `
    Angular
    <hr />
    <ul class="amenu">
      <li>
        <a routerLink="/ng/hello" routerLinkActive="active">Hello World</a>
      </li>
      <li>
        <a routerLink="/ng/component" routerLinkActive="active">Component</a>
      </li>
      <li>
        <a routerLink="/ng/component/inline" routerLinkActive="active"
          >Inline Component</a
        >
      </li>
      <li>
        <a routerLink="/ng/interpolation" routerLinkActive="active"
          >Interpolation</a
        >
      </li>
      <li>
        <a routerLink="/ng/binding" routerLinkActive="active"
          >Property Binding</a
        >
      </li>
      <li>
        <a routerLink="/ng/binding/class" routerLinkActive="active"
          >Class Binding</a
        >
      </li>
      <li>
        <a routerLink="/ng/binding/style" routerLinkActive="active"
          >Style Binding</a
        >
      </li>
      <li>
        <a routerLink="/ng/binding/event" routerLinkActive="active"
          >Event Binding</a
        >
      </li>
      <li>
        <a routerLink="/ng/binding/reference" routerLinkActive="active"
          >Reference Variable</a
        >
      </li>
      <li>
        <a routerLink="/ng/binding/twoway" routerLinkActive="active"
          >Two Way Binding</a
        >
      </li>
      <li>
        <a routerLink="/ng/directive" routerLinkActive="active"
          >ngIf Directive</a
        >
      </li>
      <li>
        <a routerLink="/ng/directive/ngswitch" routerLinkActive="active"
          >ngSwitch Directive</a
        >
      </li>
      <li>
        <a routerLink="/ng/directive/ngfor" routerLinkActive="active"
          >ngFor Directive</a
        >
      </li>
      <li>
        <a routerLink="/ng/component-interaction" routerLinkActive="active"
          >Component Interaction</a
        >
      </li>
      <li><a routerLink="/ng/pipe" routerLinkActive="active">Pipe</a></li>
      <li><a routerLink="/ng/service" routerLinkActive="active">Service</a></li>
      <li><a routerLink="/ng/routing" routerLinkActive="active">Routing</a></li>
      <li><a routerLink="/ng/api" routerLinkActive="active">API</a></li>
    </ul>
  `,
  styles: [""]
})
export class AngularComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
