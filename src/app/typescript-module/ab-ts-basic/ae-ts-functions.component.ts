import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-functions",
  template: ``,
  styles: [``]
})
export class TsFunctionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // function invocation
    this.sample();

    //invoke function
    this.caller();

    // Parameterized a Function
    this.test_param(123, "this is a string");

    // Optional Parameters
    this.disp_details(123, "John");
    this.disp_details(111, "mary", "mary@xyz.com");

    // Rest Parameters
    this.addNumbers(1, 2, 3);
    this.addNumbers(10, 10, 10, 10, 10);

    // Default parameters
    this.calculate_discount(1000);
    this.calculate_discount(1000, 0.3);

    // Anonymous function
    var msg = function() {
      return "hello world";
    };
    console.log(msg());

    // Anonymous function with parameters
    var res = function(a: number, b: number) {
      return a * b;
    };
    console.log(res(12, 2));

    // Function constructor
    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);
    console.log(x);

    // Recursion
    console.log(this.factorial(6)); // outputs 720

    // Anonymous Recursive Function
    (function() {
      var x = "Hello!!";
      console.log(x);
    })(); // the function invokes itself using a pair of parentheses ()
  }

  // function definition
  sample() {
    //function definition
    console.log("function called");
  }

  //function defined
  greet(): string {
    //the function returns a string
    return "Hello World";
  }

  caller() {
    var msg = this.greet(); //function greet() invoked
    console.log(msg);
  }

  test_param(n1: number, s1: string) {
    console.log(n1);
    console.log(s1);
  }

  // Optional Parameters
  disp_details(id: number, name: string, mail_id?: string) {
    console.log("ID:", id);
    console.log("Name", name);

    if (mail_id != undefined) console.log("Email Id", mail_id);
  }

  // Rest Parameters - Rest parameters don’t restrict the number of values that you can pass to a function
  // Rest parameters are similar to variable arguments in Java.
  addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
  }

  // Default parameters
  calculate_discount(price: number, rate: number = 0.5) {
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
  }

  // Recursion
  factorial(number) {
    if (number <= 0) {
      // termination case
      return 1;
    } else {
      return number * this.factorial(number - 1); // function invokes itself
    }
  }
}
