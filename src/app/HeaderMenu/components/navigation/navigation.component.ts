import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataManagementService} from "../../../Data-Management/data-management.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(public dataManagement:DataManagementService) {}



}
