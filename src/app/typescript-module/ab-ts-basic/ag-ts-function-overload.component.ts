import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-functions-overload",
  template: ``,
  styles: [``]
})
export class TsFunctionsOverloadComponent implements OnInit {
  constructor() {}

  /* Function Overloads */
  // a program can have multiple methods with the same name with different implementation
  // - The data type of the Parameter
  // - The number of parameters
  // - The sequence of parameters
  disp(s1: string): void;
  disp(n1: number, s1: string): void;

  disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
  }

  ngOnInit() {
    this.disp("abc");
    this.disp(1, "xyz");
  }
}
