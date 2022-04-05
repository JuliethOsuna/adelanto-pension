import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';
import { SelectCoverageComponent } from './components/select-coverage/select-coverage.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/userDataForm',
    pathMatch: 'full' },
  {
    path: 'userDataForm',
    component: UserDataFormComponent
  },
  {
    path: 'selectCoverage',
    component: SelectCoverageComponent
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
