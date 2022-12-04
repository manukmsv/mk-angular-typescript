import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-inbuilt',
  template: `
    <p>
      pipe-inbuilt works!
    </p>
    <h3>{{name}}</h3>
    <h3>{{name | lowercase }}</h3>
    <h3>{{name | uppercase}}</h3>
    <h3>{{name | titlecase}}</h3>
    <h3>{{name | slice:2:5}}</h3>

    <p>{{person | json}}</p>

    <h3>{{5.6789 | number:'1.1-2'}}</h3>
    <h3>{{5.6789 | number:'2.2-3'}}</h3>
    <h3>{{5.6789 | number:'3.4-5'}}</h3>
    <h3>{{5.6789 | number:'3.1-2'}}</h3>

    <h3>{{0.25 | percent}}</h3>

    <h3>{{5.6789 | currency}}</h3>
    <h3>{{5.6789 | currency: 'INR'}}</h3>
    <h3>{{5.6789 | currency: 'INR' : 'code'}}</h3>
    <h4>{{date}}</h4>
    <h4>{{date | date:'short'}}</h4>
    <h4>{{date | date:'shortDate'}}</h4>
    <h4>{{date | date:'shortTime'}}</h4>
    <h4>{{date | date:'long'}}</h4>
  `,
  styles: [
  ]
})
export class PipeInbuiltComponent implements OnInit {

  name = 'My Name';
  person = {
    'firstName': "Manu",
    'middleName': "Krishnan",
    'lastName': "M"
  }
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
