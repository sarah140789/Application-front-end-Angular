import { Component, OnInit } from '@angular/core';
import {Route} from '../../../../shared/enums/route.enum';
import {NavigationService} from '../../services/navigation.service';
import {I18nService} from '../../../../shared/services/i18n.service';
import {FormBuilder, Validators} from '@angular/forms';
import {DataInfoDcdService} from '../../services/data-info-dcd.service';
import {FormInfoDcd} from '../../../../shared/models/form-info-dcd';

@Component({
  selector: 'app-information-conjoint-dcd',
  templateUrl: './information-conjoint-dcd.component.html',
  styleUrls: ['./information-conjoint-dcd.component.scss']
})
export class InformationConjointDcdComponent implements OnInit {
  public i18n: any;
  public appInputFormDcd: any;
  constructor(private i18nservice: I18nService,
              private navigation: NavigationService,
              private formBuilder: FormBuilder,
              private datainfodcdservice: DataInfoDcdService) { }

  ngOnInit(): void {
    this.i18nservice.get().subscribe(response => this.i18n = response);
    this.appInputFormDcd = this.formBuilder.group({
      jour:  ['', [Validators.required]],
      mois:  ['', [Validators.required]],
      annee: ['', [Validators.required]],
      affilation: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    console.log('Gérer les erreurs formulaire info conjoint décédé');
    this.createData();
    this.nextRoute();
  }
  previousRoute(): void {
    if (this.navigation.isPreviousStepPossible()) {
      this.navigation.route(Route.personnel);
      this.navigation.setCurrentStep(this.navigation.previousStep());
    }
  }
  nextRoute(): void {
    if (this.navigation.isNextStepPossible()) {
      this.navigation.route(Route.ressource);
      this.navigation.setCurrentStep(this.navigation.nextStep());
    }
  }
  private createData(): void {
    const { libdtdc, libaffilrgo, libaffilrgn } = this.i18n?.rubrique2;
    const infoDcd = new FormInfoDcd({libdtdc, libaffilrgo, libaffilrgn }, this.appInputFormDcd.value);
    this.datainfodcdservice.addInfo(infoDcd.getData());
  }
}
