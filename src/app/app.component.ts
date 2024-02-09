import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DataManagementService} from "./Data-Management/data-management.service";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {InfoTextComponent} from "./components/info-text/info-text.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, InfoTextComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebProject';

  constructor(public dataManagement:DataManagementService) {
  }

}
