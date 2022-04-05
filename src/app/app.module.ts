import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    UserDataFormComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
