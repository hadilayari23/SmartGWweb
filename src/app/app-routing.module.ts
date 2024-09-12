import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GWConfigurationComponent } from './gwconfiguration/gwconfiguration.component';
import { MapComponent } from './map/map.component';
import { ConnectionManagementComponent } from './connection-management/connection-management.component';
import { NotifComponent } from './notif/notif.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent }, 
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  {path:'configGW',component:GWConfigurationComponent},
  {path:'confignet',component:ConnectionManagementComponent},
  {path:'notif',component:NotifComponent},
  {path:'map',component:MapComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
