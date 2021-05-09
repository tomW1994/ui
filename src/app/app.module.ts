import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommissioningComponent } from './commissioning/commissioning.component';
import { AdministrationComponent } from './administration/administration.component';
import { JobAdmissionComponent } from './job-admission/job-admission.component';
import { HeaderComponent } from './header/header.component';
import { FooterViewComponent } from './footer-view/footer-view.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutUsComponent,
    CommissioningComponent,
    AdministrationComponent,
    JobAdmissionComponent,
    HeaderComponent,
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
