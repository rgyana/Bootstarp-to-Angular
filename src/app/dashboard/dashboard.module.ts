import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';

import { PagesModule } from '../pages/pages.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    PagesModule,
    FontAwesomeModule,
    ChartModule
  ],

  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
