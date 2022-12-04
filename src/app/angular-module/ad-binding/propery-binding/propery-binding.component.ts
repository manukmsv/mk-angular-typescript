import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-propery-binding",
  template: `
    <p>
      propery-binding works!
    </p>
    <input type="text" /><br />
    <input [id]="propId" type="text" /><br />
    <input id="{{ propId }}" type="text" /><br />
    Interpolation only works with string values. So property binding come in
    picture<br />
    <input disabled id="{{ propId }}" type="text" /><br />
    This doesn't work<br />
    <input disabled="false" id="{{ propId }}" type="text" /><br />
    with property binding<br />
    <input [disabled]="false" id="{{ propId }}" type="text" /><br />
    <input [disabled]="isDisabled" id="{{ propId }}" type="text" /><br />
    another type of use<br />
    <input bind-disabled="isDisabled" id="{{ propId }}" type="text" /><br />
  `,
  styles: []
})
export class ProperyBindingComponent implements OnInit {
  propId = "input-box-id";
  isDisabled = true;
  constructor() {}

  ngOnInit(): void {}
}
