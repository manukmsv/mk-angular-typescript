import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-template-outlet",
  templateUrl: './ng-template-outlet.component.html',
  styles: []
})
export class NgTemplateOutletComponent implements OnInit {
  name = "My Name";
  myContext = { $implicit: "World", localSk: "Svet" };

  constructor() {}

  ngOnInit(): void {}
}
