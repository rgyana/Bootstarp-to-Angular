import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  
  exports: [AnimationsComponent, BordersComponent, ColorsComponent, OthersComponent]
})
export class UtilitiesModule { }
