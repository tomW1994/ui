import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommissioningComponent } from './commissioning/commissioning.component';
import { AdministrationComponent } from './administration/administration.component';
import { JobAdmissionComponent } from './job-admission/job-admission.component';
import { FooterViewComponent } from './footer-view/footer-view.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CommissioningComponent,
    AdministrationComponent,
    JobAdmissionComponent,
    FooterViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
