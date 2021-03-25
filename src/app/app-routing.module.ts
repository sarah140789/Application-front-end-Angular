import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PresentationComponent} from './ui/containers/presentation/presentation.component';
import {InformationPersonnelComponent} from './ui/containers/information-personnel/information-personnel.component';
import {InformationConjointDcdComponent} from './ui/containers/information-conjoint-dcd/information-conjoint-dcd.component';
import {RessourcesComponent} from './ui/containers/ressources/ressources.component';
import {ResultatComponent} from './ui/containers/resultat/resultat.component';
import {Route} from '../shared/enums/route.enum';

const routes: Routes = [
  {path: Route.presentation, component: PresentationComponent},
  {path: Route.personnel, component: InformationPersonnelComponent},
  {path: Route.conjoint, component: InformationConjointDcdComponent},
  {path: Route.ressource, component: RessourcesComponent},
  {path: Route.resultat, component: ResultatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
