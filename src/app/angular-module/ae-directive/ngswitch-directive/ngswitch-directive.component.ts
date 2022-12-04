import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngswitch-directive",
  template: `
    <p>
      ngswitch-directive works!
    </p>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchDefault>You picked red color</div>
    </div>
  `,
  styles: []
})
export class NgswitchDirectiveComponent implements OnInit {
  color = "red";
  constructor() {}

  ngOnInit(): void {}
}
