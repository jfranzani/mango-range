import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgcRangeComponent } from './ngc-range/ngc-range.component';



@NgModule({
  declarations: [NgcRangeComponent],
  imports: [
    CommonModule
  ],
  exports: [NgcRangeComponent]
})
export class SharedModule { }
