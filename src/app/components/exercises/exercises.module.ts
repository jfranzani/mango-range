import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SampleOneComponent],
  imports: [CommonModule, SharedModule],
})
export class ExercisesModule {}
