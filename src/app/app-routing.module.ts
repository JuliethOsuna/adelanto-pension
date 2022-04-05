import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/benefits',
    pathMatch: 'full' },
  {
    path: 'benefits',
    component: BenefitsComponent
  },
  {
    path: 'userDataForm',
    component: UserDataFormComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
