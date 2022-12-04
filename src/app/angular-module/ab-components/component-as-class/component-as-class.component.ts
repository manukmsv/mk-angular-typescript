import { Component, OnInit } from "@angular/core";

@Component({
  selector: ".app-component-as-class",
  template: `
    <p>
      component-as-class works!
    </p>
  `,
  styles: []
})
export class ComponentAsClassComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
