import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShowMeasurementComponent } from './show.Measurement.component';

export const routes = [
  { path: '', component: ShowMeasurementComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ShowMeasurementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ShowMeasurementModule {
  static routes = routes;
}
