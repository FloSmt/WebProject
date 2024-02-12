import { Routes } from '@angular/router';
import {ProjectPageComponent} from "./ProjectPage/components/project-page/project-page.component";
import {ProjectOverviewComponent} from "./ProjectOverview/components/project-overview/project-overview.component";

export const routes: Routes = [
  {path:"project/:projecttitle", component: ProjectPageComponent},
  {path:"**", component: ProjectOverviewComponent}
];
