import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ChartsComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ChartsComponent,
    TableComponent
  ]
})
export class FeaturesModule { }
