import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-style-binding",
  template: `
    <p [style.color]="'orange'">style-binding works!</p>
    <p [style.color]="hasError ? 'red' : 'green'">style-binding works!</p>
    <p [style.color]="colorVariable">style-binding works!</p>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {
  hasError = false;
  colorVariable = "red";
  constructor() {}

  ngOnInit(): void {}
}
