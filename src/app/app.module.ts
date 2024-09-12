import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GWConfigurationComponent } from './gwconfiguration/gwconfiguration.component';
import { ConnectionManagementComponent } from './connection-management/connection-management.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AreaComponent } from './charts/area/area.component';
import { MapComponent } from './map/map.component';
import { NotifComponent } from './notif/notif.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    DashboardComponent,
    GWConfigurationComponent,
    ConnectionManagementComponent,
    SidebarComponent,
    AreaComponent,
    MapComponent,
    NotifComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
