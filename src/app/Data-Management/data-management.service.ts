import { Injectable } from '@angular/core';

import * as structurJson from '../../../Structure.json';
import {NavigationItem} from "../Interface/NavigationItem";

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  data = structurJson;
  constructor() {
  }


  getNavigationItems(): NavigationItem[] {
    return this.data.Navigation;
  }

  getStartPageInformationText():string {
    return this.data.Starttext;
  }
}
