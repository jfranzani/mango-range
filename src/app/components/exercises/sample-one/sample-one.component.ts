import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  styleUrls: ['./sample-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
