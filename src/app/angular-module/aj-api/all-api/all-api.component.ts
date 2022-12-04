import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-all-api",
  template: `
    <p>
      all-api works!
    </p>
    <ul>
      <li>
        <a routerLink="./common/ngTemplateOutlet" routerLinkActive="active"
          >ngTemplateOutlet</a
        >
      </li>
      <li>
        <a routerLink="./common/ngComponentOutlet" routerLinkActive="active"
          >ngComponentOutlet</a
        >
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AllApiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
