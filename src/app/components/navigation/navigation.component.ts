import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataManagementService} from "../../Data-Management/data-management.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(public dataManagement:DataManagementService) {}



}
