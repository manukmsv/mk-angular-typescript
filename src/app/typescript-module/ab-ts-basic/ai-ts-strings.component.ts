import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ts-strings",
  template: ``,
  styles: [``]
})
export class TsStringsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(' ----- String Constructor Property -----');
    var str = new String("This is string");
    console.log("str.constructor is:" + str.constructor);

    console.log(' ----- String Length Property -----');
    var uname = new String("Hello World");
    console.log(uname);
    console.log("Length " + uname.length); // returns the total number of characters including whitespace

    console.log(' ----- Prototype property -----');
    function employee(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
    var emp = new employee(123, "Smith");
    employee.prototype.email = "smith@abc.com";
    console.log("Employee 's Id: " + emp.id);
    console.log("Employee's name: " + emp.name);
    console.log("Employee's Email ID: " + emp.email);

    // String Methods
    console.log(' ----- charAt() -----');
    var str = new String("This is string");
    console.log("str.charAt(0) is:" + str.charAt(0));
    console.log("str.charAt(1) is:" + str.charAt(1));
    console.log("str.charAt(2) is:" + str.charAt(2));
    console.log("str.charAt(3) is:" + str.charAt(3));
    console.log("str.charAt(4) is:" + str.charAt(4));
    console.log("str.charAt(5) is:" + str.charAt(5));

    console.log(' ----- charCodeAt() -----');
    var str = new String("This is string");
    console.log("str.charAt(0) is:" + str.charCodeAt(0));
    console.log("str.charAt(1) is:" + str.charCodeAt(1));
    console.log("str.charAt(2) is:" + str.charCodeAt(2));
    console.log("str.charAt(3) is:" + str.charCodeAt(3));
    console.log("str.charAt(4) is:" + str.charCodeAt(4));
    console.log("str.charAt(5) is:" + str.charCodeAt(5));

    console.log(' ----- concat() -----');
    var str1 = new String("This is string one");
    var str2 = new String("This is string two");
    var str3 = str1.concat(str2.toString());
    console.log("str1 + str2 : " + str3);

    console.log(' ----- indexOf() -----');
    var str1 = new String("This is string one");
    var index = str1.indexOf("string");
    console.log("indexOf found String :" + index);
    var index = str1.indexOf("one");
    console.log("indexOf found String :" + index);

    console.log(' ----- lastIndexOf() -----');
    var str1 = new String("This is string one and again string");
    var index = str1.lastIndexOf("string");
    console.log("lastIndexOf found String :" + index);
    index = str1.lastIndexOf("one");
    console.log("lastIndexOf found String :" + index);

    console.log(' ----- localeCompare() -----');
    var str1 = new String("This is beautiful string");
    var index = str1.localeCompare("This is beautiful string");
    console.log("localeCompare first :" + index);

    console.log(' ----- match() -----');
    // ....

    console.log(' ----- replace() -----');
    var re = /apples/gi;
    var str3 = "Apples are round, and apples are juicy.";
    var newstr = str3.replace(re, "oranges");
    console.log(newstr);

    console.log(' ----- search() -----');
    var re = /apples/gi;
    var str4 = "Apples are round, and apples are juicy.";
    if (str4.search(re) == -1) {
      console.log("Does not contain Apples");
    } else {
      console.log("Contains Apples");

      console.log(' ----- slice() -----');
      var str5 = "Apples are round, and apples are juicy.";
      var sliced = str5.slice(3, -2);
      console.log(sliced);

      console.log(' ----- split() -----');
      var str6 = "Apples are round, and apples are juicy.";
      var splitted = str6.split(" ", 3);
      console.log(splitted);

      console.log(' ----- substr() -----');
      var str7 = "Apples are round, and apples are juicy.";
      console.log("(1,2): " + str7.substr(1, 2));
      console.log("(-2,2): " + str7.substr(-2, 2));
      console.log("(1): " + str7.substr(1));
      console.log("(-20, 2): " + str7.substr(-20, 2));
      console.log("(20, 2): " + str7.substr(20, 2));

      console.log(' ----- substring() -----');
      var str8 = "Apples are round, and apples are juicy.";
      console.log("(1,2): " + str8.substring(1, 2));
      console.log("(0,10): " + str8.substring(0, 10));
      console.log("(5): " + str8.substring(5));

      console.log(' ----- toLocaleUpperCase() -----');
      var str9 = "Apples are round, and Apples are Juicy.";
      console.log(str9.toLocaleUpperCase());

      console.log(' ----- toLocaleLowerCase() -----');
      var str10 = "Apples are round, and Apples are Juicy.";
      console.log(str10.toLocaleLowerCase());

      console.log(' ----- toUpperCase() -----');
      var str11 = "Apples are round, and Apples are Juicy.";
      console.log(str11.toUpperCase());

      console.log(' ----- toLowerCase() -----');
      var str12 = "Apples are round, and Apples are Juicy.";
      console.log(str12.toLowerCase());

      console.log(' ----- toString() -----');
      var str13 = "Apples are round, and Apples are Juicy.";
      console.log(str13.toString());

      console.log(' ----- valueOf() -----');
      var str14 = new String("Hello world");
      console.log(str14.valueOf());
    }
  }
}
