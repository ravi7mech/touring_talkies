import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrySliderComponent } from './touring-modules/entry-slider/entry-slider.component';

const routes: Routes = [
  { path: 'entry', component: EntrySliderComponent },
  { path: '', redirectTo: '/entry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
