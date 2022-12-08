import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';
import { ChartModule } from 'angular2-chartjs/dist/chart.module';


@NgModule({
  declarations: [
    ChartsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ],

  exports:[
    ChartsComponent,
    TableComponent
  ]
})
export class FeaturesModule { }
