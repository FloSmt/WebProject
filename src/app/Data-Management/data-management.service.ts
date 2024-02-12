import { Injectable } from '@angular/core';

import * as structurJson from '../../assets/Structure.json';
import {NavigationItem} from "../Interface/NavigationItem";
import {Project} from "../Interface/Project";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataManagementService {

  data = structurJson;
  constructor(public http:HttpClient) {
  }

  load() {
    const json_file_path= 'assets/Structure.json';
    return new Promise((resolve, reject) => {
      this.http.get<any>(json_file_path).subscribe(
        result => {
          this.data = result;
          console.log(this.data)
          resolve(this.data);
        });
    });
  }

  getNavigationItems(): NavigationItem[] {
    return this.data.Navigation;
  }

  getStartPageInformationText():string {
    return this.data.Starttext;
  }

  getWebsiteName():string {
    return this.data.SeitenTitel;
  }


  getProjects():Project[] {
    return this.data.Projects;
  }

  getProjectNameWithoutSpace(project:Project):string {
    return project.title.replaceAll(" ", "_");
  }

  // @ts-ignore
  getProject = (title:string): Project => {
      for (const project of this.getProjects()) {
        if (this.getProjectNameWithoutSpace(project) == title) {
          return project;
        }
      }
  };
}
