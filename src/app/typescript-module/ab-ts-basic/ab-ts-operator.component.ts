import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-operator",
  template: ``,
  styles: [``]
})
export class TsOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var x: number = 4;
    var y = -x;
    console.log("value of x: ", x); //outputs 4
    console.log("value of y: ", y); //outputs -4

    var msg: string = "hello" + "world";
    console.log(msg);

    var num: number = -2;
    var result = num > 0 ? "positive" : "non-positive";
    console.log(result);

    var num = 12;
    console.log(typeof num); //output: number
  }
}
