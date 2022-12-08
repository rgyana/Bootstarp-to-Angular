import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ChartsComponent } from '../features/charts/charts.component';
import { TableComponent } from '../features/table/table.component';
import { BlankPageComponent } from '../pages/blank-page/blank-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { ForgetPasswordComponent } from '../pages/forget-password/forget-password.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AnimationsComponent } from '../utilities/animations/animations.component';
import { BordersComponent } from '../utilities/borders/borders.component';
import { ColorsComponent } from '../utilities/colors/colors.component';
import { OthersComponent } from '../utilities/others/others.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'buttons', pathMatch: 'full', component: ButtonsComponent },
  { path: 'cards', pathMatch: 'full', component: CardsComponent },
  { path: 'colors', pathMatch: 'full', component: ColorsComponent },
  { path: 'borders', pathMatch: 'full', component: BordersComponent },
  { path: 'animations', pathMatch: 'full', component: AnimationsComponent },
  { path: 'others', pathMatch: 'full', component: OthersComponent },

  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  {
    path: 'forgot-password',
    pathMatch: 'full',
    component: ForgetPasswordComponent,
  },
  { path: 'error-page', pathMatch: 'full', component: ErrorPageComponent, },
  { path: 'blank-page', pathMatch: 'full', component: BlankPageComponent },

  { path: 'charts', pathMatch: 'full', component: ChartsComponent },
  { path: 'tables', pathMatch: 'full', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
