import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngc-range',
  templateUrl: './ngc-range.component.html',
  styleUrls: ['./ngc-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgcRangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
