import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleOneComponent } from './components/exercises/sample-one/sample-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercise1', pathMatch: 'full' },
  { path: 'exercise1', component: SampleOneComponent },
  { path: '**', redirectTo: 'exercise1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
