import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobAdmissionComponent } from './job-admission/job-admission.component';
import { AdministrationComponent } from './administration/administration.component';
import { CommissioningComponent } from './commissioning/commissioning.component';

const routes: Routes = [
{ path: '', component: CommissioningComponent, pathMatch:'full' },
{ path: 'administration-component', component: AdministrationComponent },
{ path: 'job-admission-component', component: JobAdmissionComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
