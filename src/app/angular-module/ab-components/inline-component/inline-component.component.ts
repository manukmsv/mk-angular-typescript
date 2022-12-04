import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inline-component",
  template: `
    <p>
      inline-component works!
    </p>
  `,
  styles: []
})
export class InlineComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
