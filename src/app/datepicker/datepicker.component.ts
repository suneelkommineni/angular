import { Component, OnInit ,ChangeDetectionStrategy,  ViewEncapsulation } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
  }

}
