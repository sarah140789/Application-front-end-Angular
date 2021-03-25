import { DataInfoRessService } from './../../services/data-info-ress.service';
import { Component, OnInit } from '@angular/core';
import {Route} from '../../../../shared/enums/route.enum';
import {NavigationService} from '../../services/navigation.service';
import {I18nService} from '../../../../shared/services/i18n.service';
import { PartageinforecapService } from './../../services/partageinforecap.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormInfoRess} from '../../../../shared/models/form-info-ress';


@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {
  public i18n: any;
  public appInputFormRess: any;
  constructor(
    private i18nservice: I18nService, 
    private navigation: NavigationService,
    private partageinforecapservice: PartageinforecapService,
    private formBuilder: FormBuilder,
   /* private datainforessservice: DataInfoRessService*/) { }
    ladate=new Date();
    tab_mois=new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre");

  ngOnInit(): void { 
    this.i18nservice.get().subscribe(response => this.i18n = response);
    /*this.partageinforecapservice.ajoutressources('infoderessources');
    this.appInputFormRess = this.formBuilder.group({
      ressourcea:  ['', [Validators.required]],
      ressourceav:  ['', [Validators.required]],
      ressourcev: ['', [Validators.required]],
      ressourcec: ['', [Validators.required]],
    });*/

  }
  
  submitForm(): void {
    console.log('Gérer les erreurs formulaire info conjoint décédé');
    this.nextRoute();
  }
  previousRoute(): void {
    if (this.navigation.isPreviousStepPossible()) {
      this.navigation.route(Route.conjoint);
      this.navigation.setCurrentStep(this.navigation.previousStep());
    }
  }
  nextRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.resultat);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
 /* private createData(): void {
    const {  libressact,libressavtdc,libvous,libvotrecjt } = this.i18n?.rubrique3;
    const infoRess = new FormInfoRess({ libressact,libressavtdc,libvous,libvotrecjt  }, this.appInputFormRess.value);
    this.datainforessservice.addInfo(infoRess.getData());
  }*/

}

  
