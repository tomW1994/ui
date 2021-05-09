import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JobAdmissionComponent } from './job-admission/job-admission.component';
import { AdministrationComponent } from './administration/administration.component';
import { CommissioningComponent } from './commissioning/commissioning.component';

const routes: Routes = [
  { path: 'start-component', component: StartComponent },
{ path: 'about-us-component', component: AboutUsComponent },
{ path: '', component: CommissioningComponent, pathMatch:'full' },
{ path: 'administration-component', component: AdministrationComponent },
{ path: 'job-admission-component', component: JobAdmissionComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
