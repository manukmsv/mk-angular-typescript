import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reference-variable",
  template: `
    <p>
      reference-variable works!
    </p>
    <input #myInput type="text" />
    <button (click)="logMsg(myInput.value)">Log</button>
    <button (click)="logMsg(myInput)">Log</button>
  `,
  styles: []
})
export class ReferenceVariableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logMsg(elm) {
    console.log(elm);
  }
}
