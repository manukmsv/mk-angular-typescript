import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-component-as-attribute]',
  template: `
    <p>
      component-as-attribute works!
    </p>
  `,
  styles: [
  ]
})
export class ComponentAsAttributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
