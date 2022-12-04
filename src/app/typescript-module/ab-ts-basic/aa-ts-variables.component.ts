import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-variables",
  template: ``,
  styles: [``]
})
export class TsVariablesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Variable Declaration in TypeScript
    var name: string = "John";
    var score1: number = 50;
    var score2: number = 42.5;
    var sum = score1 + score2;
    console.log("name" + name);
    console.log("first score: " + score1);
    console.log("second score: " + score2);
    console.log("sum of the scores: " + sum);

    // Type Assertion in TypeScript
    var str = "1";
    var str2: number = <number>(<any>str); //str is now of type number
    console.log(typeof str2);

    // Inferred Typing in TypeScript
    var num = 2; // data type inferred as  number
    console.log("value of num " + num);
    //num = "12";
    console.log(num);

    // TypeScript Variable Scope
    var global_num = 12; //global variable
    class Numbers {
      num_val = 13; //class variable
      static sval = 10; //static field

      storeNum(): void {
        var local_num = 14; //local variable
      }
    }
    console.log("Global num: " + global_num);
    console.log(Numbers.sval); //static variable
    var obj = new Numbers();
    console.log("Global num: " + obj.num_val);
  }
}
