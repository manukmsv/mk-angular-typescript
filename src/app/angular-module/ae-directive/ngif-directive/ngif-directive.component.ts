import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  template: `
    <p>
      ngif-directive works!
    </p>
    <h1 *ngIf="true">Headding 1</h1>
    <h1 *ngIf="displayTitle">Headding 1</h1>
    <h1 *ngIf="!displayTitle; else elseBlock">Headding 1</h1>
    <div *ngIf="displayTitle; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Headding then</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Headding Hidden</h2>
    </ng-template>


  `,
  styles: [
  ]
})
export class NgifDirectiveComponent implements OnInit {
  displayTitle = true;
  constructor() { }

  ngOnInit(): void {
  }

}
