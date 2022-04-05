import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { SelectCoverageComponent } from './components/select-coverage/select-coverage.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SelectCoverageComponent,
    UserDataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
