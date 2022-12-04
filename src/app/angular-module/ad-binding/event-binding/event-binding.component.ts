import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  template: `
    <p>
      event-binding works!
    </p>
    <p>{{ name }}</p>
    <button (click)="onClick()">Click</button><br />
    <button (click)="onClick2($event)">Click with event</button><br />
    <button (click)="onClick3($event)">Click with event</button><br />
    <button (click)="onClick4()">Click</button><br />
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  name = "Event Binding";

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("CLICK");
  }
  onClick2(event: any) {
    console.log(event);
  }
  onClick3(event: any) {
    console.log(event.type);
  }
  onClick4() {
    this.name = "Clicked";
  }
}
