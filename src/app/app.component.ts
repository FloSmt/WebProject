import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {DataManagementService} from "./Data-Management/data-management.service";
import {NavigationComponent} from "./HeaderMenu/components/navigation/navigation.component";
import {InfoTextComponent} from "./HeaderMenu/components/info-text/info-text.component";
import {HeaderComponent} from "./HeaderMenu/components/header/header.component";
import {ProjectDisplayComponent} from "./ProjectOverview/components/project-display/project-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, InfoTextComponent, HeaderComponent, ProjectDisplayComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = this.dataManagement.getWebsiteName();

  constructor(public dataManagement:DataManagementService) {
    dataManagement.load();
  }

}
