import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Route} from '../../../../shared/enums/route.enum';
import {I18nService} from '../../../../shared/services/i18n.service';
import {NavigationService} from '../../services/navigation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormInfoPerso} from '../../../../shared/models/form-info-perso';
import {DataInfoPersoService} from '../../services/data-info-perso.service';

@Component({
  selector: 'app-information-personnel',
  templateUrl: './information-personnel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./information-personnel.component.scss']
})
export class InformationPersonnelComponent implements OnInit {
  public i18n: any;
  public appInputForm: any;
  constructor(private i18nservice: I18nService,
              private navigation: NavigationService,
              private formBuilder: FormBuilder,
              private datainfoperson: DataInfoPersoService) { }
  ngOnInit(): void {
    this.i18nservice.get().subscribe(response => this.i18n = response);
    this.appInputForm = this.createForms();
  }
  private createForms(): FormGroup{
    return this.formBuilder.group({
      jour:  ['', [Validators.required]],
      mois:  ['', [Validators.required]],
      annee: ['', [Validators.required]],
      marie: ['', [Validators.required]],
      decee: [null],
      couple: ['', [Validators.required]]
    });
  }
  public submitForm(): void {
    console.log('Gérer les erreurs formulaire!');
    this.createData();
    this.nextRoute();
  }
  public nextRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.conjoint);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
  public previousRoute(): void {
    if (this.navigation.isPreviousStepPossible()) {
      this.navigation.route(Route.presentation);
      this.navigation.setCurrentStep(this.navigation.previousStep());
    }
  }
  private createData(): void {
    const {
      libDateNaiss, libcploui, libcplnon, libMarieConjointDcdOui,
      libMarieConjointDcdNon, libMarieMomentDecesOui, libMarieMomentDecesNon
    } = this.i18n?.rubrique1;
    const infoPerso = new FormInfoPerso({
        libDateNaiss,
        libcploui,
        libcplnon,
        libMarieConjointDcdOui,
        libMarieConjointDcdNon,
        libMarieMomentDecesOui,
        libMarieMomentDecesNon
      }, this.appInputForm.value
    );
    // console.log('infoperso component : ', infoPerso.getData());
    this.datainfoperson.addInfo(infoPerso.getData());
  }
}
