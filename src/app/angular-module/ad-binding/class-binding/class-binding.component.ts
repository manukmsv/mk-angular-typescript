import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class-binding",
  template: `
    <p class="text-success">class-binding works!</p>
    <p [class]="classProp">class-binding works!</p>
    <p class="text-italic" [class]="classProp">class-binding works!</p>
    for single class
    <p [class.text-error]="isError">class-binding works!</p>
    for multiple class use ngClass<br />
    <p [ngClass]="messageClass">class-binding works!</p>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-error {
        color: red;
      }
      .text-warning {
        color: orange;
      }
      .text-italic {
        font-style: italic;
      }
    `
  ]
})
export class ClassBindingComponent implements OnInit {
  classProp = "text-success";
  isError = true;
  isSpecial = true;
  messageClass = {
    "text-success": !this.isError,
    "text-error": this.isError,
    "text-italic": this.isSpecial
  };
  constructor() {}

  ngOnInit(): void {}
}
