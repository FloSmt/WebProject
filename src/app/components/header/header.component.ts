import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoTextComponent} from "../info-text/info-text.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {DataManagementService} from "../../Data-Management/data-management.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InfoTextComponent, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dataManagement:DataManagementService) {
  }
}
