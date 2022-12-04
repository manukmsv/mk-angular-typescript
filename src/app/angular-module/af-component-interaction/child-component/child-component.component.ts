import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-component",
  template: `
    <p>
      child-component works!
    </p>
    <p>{{ parentData }}</p>
    <p>{{ childName }}</p>
    <button (click)="fireEvent()">SEND EVENT</button>
  `,
  styles: []
})
export class ChildComponentComponent implements OnInit {
  @Input() parentData: String;
  @Input("parentName") childName: String;

  @Output() childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit("Hey this is child message");
  }
}
