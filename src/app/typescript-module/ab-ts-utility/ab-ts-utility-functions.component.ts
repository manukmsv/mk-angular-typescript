import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-utility-functions",
  template: ``,
  styles: [``]
})
export class TsUtilityFunctionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!this.isEmpty("Hi")) {
      console.log("Hi");
    }
    console.log("--------------------------------------");

    // List may have duplicate ids
    const example1 = [
      { id: 124, name: "qqq" },
      { id: 589, name: "www" },
      { id: 45, name: "eee" },
      { id: 567, name: "rrr" },
      { id: 124, name: "aaa" }
    ];

    // filter to list with values matches the condition true
    console.log(example1.filter(obj => obj.id == 124));

    console.log("--------------------------------------");

    // List have unique ids
    const example2 = [
      { id: 124, name: "qqq" },
      { id: 589, name: "www" },
      { id: 45, name: "eee" },
      { id: 567, name: "rrr" }
    ];

    /**
     * find used by assuming id is unique
     * else it return first object matches the condition
     */
    console.log(example2.find(obj => obj.id == 124));

    console.log("--------------------------------------");

    let example3 = [
      { name: "Los Angeles", population: 3792621 },
      { name: "New York", population: 8175133 },
      { name: "Chicago", population: 2695598 },
      { name: "Houston", population: 2099451 },
      { name: "Philadelphia", population: 1526006 }
    ];
    console.log(
      example3.filter(function(e) {
        return e.population > 3000000;
      })
    );

    console.log("--------------------------------------");

    console.log(
      example3.filter(function(e, index) {
        console.log("index " + index);
        return e.population > 3000000;
      })
    );

    console.log("--------------------------------------");

    /**
     * First, the filter() method returns the cities whose populations are less than 3 million.
     * Second, the sort() method sorts the resulting cities by the populations in descending order
     * Third, the map() method show each element in the result array in the web console.
     */
    example3
      .filter(city => city.population < 3000000)
      .sort((c1, c2) => c1.population - c2.population)
      .map(city => console.log(city.name + ":" + city.population));

    console.log("--------------------------------------");

    let example4 = [
      10,
      20,
      "30",
      1,
      5,
      "JavaScript filter",
      undefined,
      "example"
    ];
    console.log(example4.filter(this.isInRange));

    console.log("--------------------------------------");

    const example5 = [1, 2, 3, 4];
    console.log(example5.map(item => item * 2));

    console.log("--------------------------------------");

    const example6 = [1, 2, 3, 4];
    console.log(
      example6.reduce(function(result, item) {
        return result + item;
      }, 0)
    );

    console.log("--------------------------------------");

    var example7 = [
      "dog",
      "chicken",
      "cat",
      "dog",
      "chicken",
      "chicken",
      "rabbit"
    ];

    console.log(
      example7.reduce(function(obj, pet) {
        if (!obj[pet]) {
          obj[pet] = 1;
        } else {
          obj[pet]++;
        }
        return obj;
      }, {})
    );

    console.log("--------------------------------------");

    const example8 = [3, 1, 3, 5, 2, 4, 4, 4];

    // Remove duplicates from an array of numbers/strings
    const example8UniqueValues = [...new Set(example8)];
    console.log(example8UniqueValues);

    console.log("--------------------------------------");

    const example9 = [
      { id: 11, name: "Adam", age: 23, group: "editor" },
      { id: 47, name: "John", age: 28, group: "admin" },
      { id: 85, name: "William", age: 34, group: "editor" },
      { id: 97, name: "Oliver", age: 28, group: "admin" }
    ];

    // A simple search (case-sensitive)
    console.log(example9.filter(it => it.name.includes("Oli")));

    console.log("--------------------------------------");

    // A simple search (case-insensitive)
    console.log(example9.filter(it => new RegExp("oli", "i").test(it.name)));

    console.log("--------------------------------------");

    /**
     * Check if any of the users have admin rights
     * The some() method tests whether at least one element in the array passes the test implemented by the provided function.
     */
    console.log(example9.some(user => user.group === "admin"));

    console.log("--------------------------------------");

    const example10 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    /**
     * Flattening an array of arrays
     * The result of the first iteration is equal to : […[], …[1, 2, 3]] means it transforms to [1, 2, 3]
     * — this value we provide as an ‘acc’ on the second iteration and so on.
     */
    console.log(example10.reduce((acc, it) => [...acc, ...it], []));

    console.log("--------------------------------------");

    /**
     * We can slightly improve this code by omitting an empty array[]as the second argument for reduce().
     * Then the first value of the nested will be used as the initial acc value.
     */
    console.log(example10.reduce((acc, it) => [...acc, ...it]));

    console.log("--------------------------------------");

    // here is a shorter way without Array.reduce
    let example10flat = [].concat.apply([], example10);
    console.log(example10flat);

    console.log("--------------------------------------");

    const example11 = [
      { id: 11, name: "Adam", age: 23, group: "editor" },
      { id: 47, name: "John", age: 28, group: "admin" },
      { id: 85, name: "William", age: 34, group: "editor" },
      { id: 97, name: "Oliver", age: 28, group: "admin" }
    ];

    // Create an object that contains the frequency of the specified key
    console.log(
      example11.reduce((acc, it) => {
        acc[it.age] = acc[it.age] + 1 || 1;
        return acc;
      }, {})
    );

    console.log("--------------------------------------");

    // Indexing an array of objects (lookup table)
    console.log(example11.reduce((acc, it) => ((acc[it.id] = it), acc), {}));

    console.log("--------------------------------------");

    // Extract the unique values for the given key of each item in the array
    const listOfUserGroups = [...new Set(example11.map(it => it.group))];
    console.log(listOfUserGroups);

    console.log("--------------------------------------");

    const example12 = {
      Lyon: "France",
      Berlin: "Germany",
      Paris: "France"
    };

    // Object key-value map reversal
    console.log(
      Object.keys(example12).reduce(
        (acc, k) => (
          (acc[example12[k]] = [...(acc[example12[k]] || []), k]), acc
        ),
        {}
      )
    );

    console.log("--------------------------------------");

    console.log(
      Object.keys(example12).reduce((acc, k) => {
        let country = example12[k];
        acc[country] = acc[country] || [];
        acc[country].push(k);
        return acc;
      }, {})
    );

    console.log("--------------------------------------");

    const example13 = [-15, -5, 0, 10, 16, 20, 24, 32];
    // Create an array of Fahrenheit values from an array of Celsius values
    console.log(example13.map(t => t * 1.8 + 32));

    console.log("--------------------------------------");

    const example14 = { lat: 45, lng: 6, alt: 1000 };
    // Encode an object into a query string
    const example13QueryString = Object.entries(example14)
      .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1]))
      .join("&");
    console.log(example13QueryString);

    console.log("--------------------------------------");

    const example15 = [
      { id: 11, name: "Adam", age: 23, group: "editor" },
      { id: 47, name: "John", age: 28, group: "admin" },
      { id: 85, name: "William", age: 34, group: "editor" },
      { id: 97, name: "Oliver", age: 28, group: "admin" }
    ];

    // Print a table of users as a readable string only with specified keys
    console.log(
      example15.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join("")
    );

    console.log("--------------------------------------");

    // JSON.stringify can make the string output more readable, but not as a table
    console.log(JSON.stringify(example15, ["id", "name", "group"], 2));

    console.log("--------------------------------------");

    /** Find and replace a key-value pair in an array of objects
     * Let’s say we want to change John’s age. If you know the index,
     * you can write this line: users[1].age = 29.
     * However, let’s take a look at another way of doing it:
     */
    console.log(
      example15.map(p => (p.id !== 47 ? p : { ...p, age: p.age + 1 }))
    );

    console.log("--------------------------------------");

    const example16arrA = [1, 4, 3, 2];
    const example16arrB = [5, 2, 6, 7, 1];

    // Union (A ∪ B) of arrays
    const example16result = [...new Set([...example16arrA, ...example16arrB])];
    console.log(example16result);

    console.log("--------------------------------------");

    // Intersection (A ∩ B) of arrays
    console.log(example16arrA.filter(it => example16arrB.includes(it)));

    console.log("--------------------------------------");
  }

  /**
   * console.log(isEmpty()); // true
   * console.log(isEmpty(null)); // true
   * console.log(isEmpty('')); // true
   * console.log(isEmpty('  ')); // true
   * console.log(isEmpty(undefined)); // true
   * console.log(isEmpty({})); // true
   * console.log(isEmpty([])); // true
   * console.log(isEmpty(0)); // false
   * console.log(isEmpty('Hey')); // false
   * @param data input
   */
  isEmpty = function(data) {
    if (typeof data === "object") {
      if (JSON.stringify(data) === "{}" || JSON.stringify(data) === "[]") {
        return true;
      } else if (!data) {
        return true;
      }
      return false;
    } else if (typeof data === "string") {
      if (!data.trim()) {
        return true;
      }
      return false;
    } else if (typeof data === "undefined") {
      return true;
    } else {
      return false;
    }
  };

  isStringEmpty(s: string) {
    return !s.length;
  }

  isStringBlank(s: string) {
    return this.isStringEmpty(s.trim());
  }

  isInRange(value) {
    if (typeof value !== "number") {
      return false;
    }
    return value >= 1 && value <= 10;
  }
}
