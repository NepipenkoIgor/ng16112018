import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public getDate(): Date {
    return new Date();
  }
}
