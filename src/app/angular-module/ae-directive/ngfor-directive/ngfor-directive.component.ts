import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  template: `
    <p>
      ngfor-directive works!
    </p>
    <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
    </div>
    ------------------------------------------
    <div *ngFor="let color of colors;index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
    ------------------------------------------
    <div *ngFor="let color of colors;first as f">
      <h2>{{f}} {{color}}</h2>
    </div>
    ------------------------------------------
    <div *ngFor="let color of colors;last as l">
      <h2>{{l}} {{color}}</h2>
    </div>
    ------------------------------------------
    <div *ngFor="let color of colors;odd as o">
      <h2>{{o}} {{color}}</h2>
    </div>
    ------------------------------------------
    <div *ngFor="let color of colors;even as e">
      <h2>{{e}} {{color}}</h2>
    </div>
  `,
  styles: [
  ]
})
export class NgforDirectiveComponent implements OnInit {

  colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit(): void {
  }

}
