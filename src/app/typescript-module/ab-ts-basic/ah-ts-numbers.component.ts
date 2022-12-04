import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-numbers",
  template: ``,
  styles: [``]
})
export class TsNumbersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("TypeScript Number Properties: ");
    console.log(
      "Maximum value that a number variable can hold: " + Number.MAX_VALUE
    );
    console.log(
      "The least value that a number variable can hold: " + Number.MIN_VALUE
    );
    console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
    console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

    var month = 0;
    if (month <= 0 || month > 12) {
      month = Number.NaN;
      console.log("Month is " + month);
    } else {
      console.log("Value Accepted..");
    }

    // prototype
    function employee(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    var emp = new employee(123, "Smith");
    employee.prototype.email = "smith@abc.com";

    console.log("Employee 's Id: " + emp.id);
    console.log("Employee's name: " + emp.name);
    console.log("Employee's Email ID: " + emp.email);

    // toExponential()
    var num1 = 1225.3;
    var val = num1.toExponential();
    console.log(val);

    // toFixed()
    var num3 = 177.234;
    console.log("num3.toFixed() is " + num3.toFixed());
    console.log("num3.toFixed(2) is " + num3.toFixed(2));
    console.log("num3.toFixed(6) is " + num3.toFixed(6));

    // toLocaleString()
    var num = new Number(177.1234);
    console.log(num.toLocaleString());

    // toPrecision()
    var num = new Number(7.123456);
    console.log(num.toPrecision());
    console.log(num.toPrecision(1));
    console.log(num.toPrecision(2));

    // toString()
    var num = new Number(10);
    console.log(num.toString());
    console.log(num.toString(2));
    console.log(num.toString(8));

    // valueOf()
    var num = new Number(10);
    console.log(num.valueOf());
  }
}
