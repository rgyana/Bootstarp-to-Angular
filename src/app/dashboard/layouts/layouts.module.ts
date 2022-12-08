import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class LayoutsModule { }
