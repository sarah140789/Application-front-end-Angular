import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PresentationComponent} from './containers/presentation/presentation.component';
import {InformationPersonnelComponent} from './containers/information-personnel/information-personnel.component';
import {InformationConjointDcdComponent} from './containers/information-conjoint-dcd/information-conjoint-dcd.component';
import {RessourcesComponent} from './containers/ressources/ressources.component';
import {ResultatComponent} from './containers/resultat/resultat.component';
import {RecapitulatifComponent} from './containers/recapitulatif/recapitulatif.component';
import {InfoRecapitulatifComponent} from './components/info-recapitulatif/info-recapitulatif.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PageErreurComponent } from './containers/page-erreur/page-erreur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CollapseComponent } from './components/collapse/collapse.component';
import { AffichageInfoCollapseComponent } from './components/affichage-info-collapse/affichage-info-collapse.component';
import {InputComponent} from './components/input/input.component';
import { OuiNonComponent } from './components/oui-non/oui-non.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    UiComponent,
    PresentationComponent,
    InformationPersonnelComponent,
    InformationConjointDcdComponent,
    RessourcesComponent,
    ResultatComponent,
    RecapitulatifComponent,
    InfoRecapitulatifComponent,
    TimelineComponent,
    PageErreurComponent,
    CollapseComponent,
    AffichageInfoCollapseComponent,
    InputComponent,
    OuiNonComponent
  ],
    exports: [
        UiComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UiModule { }
