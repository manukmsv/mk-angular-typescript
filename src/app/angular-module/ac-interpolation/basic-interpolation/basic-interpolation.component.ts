import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-interpolation",
  template: `
    <p>
      basic-interpolation works!
    </p>
    <p>Welcome {{ name }}</p>
    <p>2 + 2 = {{ 2 + 2 }}</p>
    <p>{{ "Welcome " + name }}</p>
    <p>Length {{ name.length }}</p>
    <p>Uppercase - {{ name.toUpperCase() }}</p>
    <p>Lowercase - {{ name.toLowerCase() }}</p>
    <p>{{ greetUser() }}</p>
    <p>{{ siteUrl }}</p>
  `,
  styles: []
})
export class BasicInterpolationComponent implements OnInit {
  name = "Manu";
  siteUrl = window.location.href;
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return "Hello " + name;
  }
}
