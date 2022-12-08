import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutsModule } from './dashboard/layouts/layouts.module';
import { ComponentsModule } from './components/components.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { PagesModule } from './pages/pages.module';
import { FeaturesModule } from './features/features.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    DashboardModule,
    ComponentsModule,
    UtilitiesModule,
    PagesModule,
    FeaturesModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
