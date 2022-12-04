import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-lambda-functions",
  template: ``,
  styles: [``]
})
export class TsLambdaFunctionsComponent implements OnInit {
  constructor() {}

  // Lambda Expression
  example1 = (x: number) => 10 + x;

  // Lambda statement
  example2 = (x: number) => {
    x = 10 + x;
    console.log(x);
  };

  // Syntactic Variations
  // Parameter type Inference
  // It is not mandatory to specify the data type of a parameter.
  example3 = x => {
    if (typeof x == "number") {
      console.log(x + " is numeric");
    } else if (typeof x == "string") {
      console.log(x + " is a string");
    }
  };

  // Optional parentheses for a single parameter
  example4 = x => {
    console.log("The function got " + x);
  };

  // Empty parentheses for no parameter
  example5 = () => {
    console.log("Function invoked");
  };

  ngOnInit() {
    // Lambda Expression
    console.log(this.example1(100)); //outputs 110

    // Lambda statement
    this.example2(100);

    // Syntactic Variations
    this.example3(12);
    this.example3("Tom");

    // Optional parentheses for a single parameter
    this.example4(12);

    // Empty parentheses for no parameter
    this.example5();
  }
}
