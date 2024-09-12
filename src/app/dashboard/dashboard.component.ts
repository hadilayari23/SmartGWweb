import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoRaWANConnected: boolean = false; // Par exemple, connecté
  isWiFiConnected: boolean = false;   // Par exemple, déconnecté
  isGPRSConnected: boolean = true;    // Par exemple, connecté
}
