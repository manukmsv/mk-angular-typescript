import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-arrays",
  template: ``,
  styles: [``]
})
export class TsArraysComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("----- START -----");
    // Simple Array
    console.log("----- Simple Array -----");
    var alphas: string[];
    alphas = ["1", "2", "3", "4"];
    console.log(alphas[0]);
    console.log(alphas[1]);

    // Single statement declaration and initialization
    console.log("----- Single statement declaration and initialization -----");
    var nums: number[] = [1, 2, 3, 3];
    console.log(nums[0]);
    console.log(nums[1]);
    console.log(nums[2]);
    console.log(nums[3]);

    // Array Object
    console.log("----- Array Object -----");
    var arr_names: number[] = new Array(4);
    for (var i = 0; i < arr_names.length; i++) {
      arr_names[i] = i * 2;
      console.log(arr_names[i]);
    }

    // Array Constructor accepts comma separated values
    console.log("----- Array Constructor accepts comma separated values -----");
    var names: string[] = new Array("Mary", "Tom", "Jack", "Jill");
    for (var i = 0; i < names.length; i++) {
      console.log(names[i]);
    }

    // concat()
    var alpha = ["a", "b", "c"];
    var numeric = [1, 2, 3];
    //var alphaNumeric = alpha.concat(numeric);
    //console.log("alphaNumeric : " + alphaNumeric);

    // every()
    function isBigEnough(element, index, array) {
      return element >= 10;
    }
    var passed = [12, 5, 8, 130, 44].every(isBigEnough);
    console.log("Test Value : " + passed);
  }
}
