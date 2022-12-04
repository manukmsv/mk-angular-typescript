import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-component",
  template: `
    <p>
      parent-component works!
    </p>
    <p>{{ message }}</p>
    <app-child-component
      [parentData]="parentData"
      [parentName]="'NAME'"
      (childEvent)="message = $event"
    ></app-child-component>
  `,
  styles: []
})
export class ParentComponentComponent implements OnInit {
  parentData = "Parent Component Data";
  message = "Hey this is parent message";
  constructor() {}

  ngOnInit(): void {}
}
