import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoTextComponent} from "../info-text/info-text.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {DataManagementService} from "../../../Data-Management/data-management.service";
import {ProjectListComponent} from "../project-list/project-list.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InfoTextComponent, NavigationComponent, ProjectListComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() infoText!:string;


  constructor(public dataManagement:DataManagementService) {
  }
}
