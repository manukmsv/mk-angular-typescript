import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-loops',
  template: ``,
  styles: [``]
})
export class TsLoopsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('----- FOR -----');
    var num: number = 5;
    var i: number;
    var factorial = 1;
    for (i = num; i >= 1; i--) {
      factorial *= i;
    }
    console.log(factorial);

    console.log('----- FOR -----');
    var j: any;
    var n: any = 'a b c';
    for (j in n) {
      console.log(n[j]);
    }

    console.log('----- FOR -----');
    const m: any = ['a', 'b', 'c'];
    for (let j of m) {
      console.log(j);
    }

    console.log('----- While -----');
    var num: number = 5;
    var factorial: number = 1;
    while (num >= 1) {
      factorial = factorial * num;
      num--;
    }
    console.log('The factorial  is ' + factorial);

    console.log('----- DO WHILE -----');
    var w: number = 10;
    do {
      console.log(w);
      w--;
    } while (w >= 0);

    console.log('----- break Statement -----');
    var i: number = 1;
    while (i <= 10) {
      if (i % 5 == 0) {
        console.log('The first multiple of 5  between 1 and 10 is : ' + i);
        break; //exit the loop if the first multiple is found
      }
      i++;
    } //outputs 5 and exits the loop

    console.log('----- continue Statement -----');
    var num: number = 0;
    var count: number = 0;

    for (num = 0; num <= 20; num++) {
      if (num % 2 == 0) {
        continue;
      }
      count++;
    }
    console.log(' The count of odd values between 0 and 20 is: ' + count);
  }
}
